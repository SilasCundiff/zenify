import React, { useState, useEffect, useRef } from 'react';
import Particles from 'react-tsparticles';
import './App.css';
import particlesOptions from './particles.json';
import songFile from './Audio/dubstep.mp3';

// let ctx, center_x, center_y, radius, x_end, y_end, bar_height;
// const width = window.innerWidth;
// const height = window.innerHeight;
// const bars = 555;
// const bar_width = 1;
// let rafId;
function App() {
  //Canvas
  const canvas = useRef();
  const didMountRef = useRef(false);
  const [pOptions, setPOptions] = useState({ ...particlesOptions });
  //Audio
  const [audio, setAudio] = useState(new Audio(songFile));
  const [audioContext, setAudioContext] = useState(
    new (window.AudioContext || window.webkitAudioContext)()
  );
  const [source, setSource] = useState(
    audioContext.createMediaElementSource(audio)
  );
  const [analyser, setAnalyser] = useState(audioContext.createAnalyser());
  const [dataArray, setDataArray] = useState(
    // new Float32Array(analyser.frequencyBinCount)
    new Uint8Array(analyser.frequencyBinCount)
  );
  const [rafId, setRafId] = useState(null);
  const getContext = () => {
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    //! console.log('audio', audio);
    //! console.log('analyser', analyser);
    //! console.log('dataArray', dataArray);
    //! console.log('source', source);
  };
  useEffect(() => {
    getContext();
  }, []);

  function animationLooper(canvas) {
    // canvas.width = width;
    // canvas.height = height;
    // ctx = canvas.getContext('2d');
    // for (var i = 0; i < bars; i++) {
    //   //divide a circle into equal part
    //   const rads = (Math.PI * 2) / bars;
    //   // Math is magical
    //   bar_height = dataArray[i] * 2;
    //   const x = center_x + Math.cos(rads * i) * radius;
    //   const y = center_y + Math.sin(rads * i) * radius;
    //   x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
    //   y_end = center_y + Math.sin(rads * i) * (radius + bar_height);
    //   //draw a bar
    //   drawBar(x, y, x_end, y_end, dataArray[i], ctx, canvas);
    // }
  }
  // function drawBar(x1 = 0, y1 = 0, x2 = 0, y2 = 0, frequency, ctx, canvas) {
  //   const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  //   gradient.addColorStop(0, 'rgba(35, 7, 77, 1)');
  //   gradient.addColorStop(1, 'rgba(204, 83, 51, 1)');
  //   ctx.fillStyle = gradient;

  //   const lineColor = 'rgb(' + frequency + ', ' + frequency + ', ' + 205 + ')';
  //   ctx.strokeStyle = lineColor;
  //   ctx.lineWidth = bar_width;
  //   ctx.beginPath();
  //   ctx.moveTo(x1, y1);
  //   ctx.lineTo(x2, y2);
  //   ctx.stroke();
  // }

  const tick = () => {
    // animationLooper(canvas.current);
    analyser.getByteTimeDomainData(dataArray);
    setRafId(requestAnimationFrame(tick));
    setPOptions((prevOptions) => ({
      ...prevOptions,
      particles: {
        ...pOptions.particles,
        move: {
          ...pOptions.particles.move,
          speed: dataArray[0] / (dataArray[0] + 1),
        },
      },
    }));
  };
  const handleClick = () => {
    if (audio.paused) {
      audio.play();
      setRafId(requestAnimationFrame(tick));
    } else {
      audio.pause();
      setRafId(cancelAnimationFrame(rafId));
    }
    // getContext();

    setPOptions((prevOptions) => ({
      ...prevOptions,
      background: {
        color: {
          value: '#162257',
        },
      },
      particles: {
        ...pOptions.particles,
        move: {
          ...pOptions.particles.move,
          speed: 1,
        },
      },
    }));
    // getContext();
  };
  useEffect(() => {
    if (didMountRef.current) {
      console.log('inside effect', pOptions);
    } else didMountRef.current = true;
  }, [pOptions]);
  return (
    <div className='App'>
      <Particles options={pOptions} />
      <canvas ref={canvas} id='myCanvas' width='500' height='200'></canvas>
      <button onClick={handleClick}>change color</button>
    </div>
  );
}

export default App;
