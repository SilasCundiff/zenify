import React, { useState, useEffect, useRef } from 'react';
// import Particles from 'react-tsparticles';
import './App.css';
// import particlesOptions from './particles.json';
import songFile from './Audio/dubstep.mp3';

//!   Temp code
let ctx, x_end, y_end, bar_height;
const width = window.innerWidth;
const height = window.innerHeight;
const bars = 555;
const bar_width = 1;
const radius = 0;
const center_x = width / 2;
const center_y = height / 2;
//!

function App() {
  const [song, setSong] = useState(new Audio(songFile));
  let [frequency_array, setFrequencyArray] = useState(null);
  const canvas = useRef('myCanvas');

  //! temp
  const animationLooper = (canvas) => {
    canvas.width = width;
    canvas.height = height;

    ctx = canvas.getContext('2d');

    for (var i = 0; i < bars; i++) {
      //divide a circle into equal part
      const rads = (Math.PI * 2) / bars;

      // Math is magical
      bar_height = this.frequency_array[i] * 2;

      const x = center_x + Math.cos(rads * i) * radius;
      const y = center_y + Math.sin(rads * i) * radius;
      x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
      y_end = center_y + Math.sin(rads * i) * (radius + bar_height);

      //draw a bar
      drawBar(x, y, x_end, y_end, this.frequency_array[i], ctx, canvas);
    }
  };

  const drawBar = (x1 = 0, y1 = 0, x2 = 0, y2 = 0, frequency, ctx, canvas) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(35, 7, 77, 1)');
    gradient.addColorStop(1, 'rgba(204, 83, 51, 1)');
    ctx.fillStyle = gradient;

    const lineColor = 'rgb(' + frequency + ', ' + frequency + ', ' + 205 + ')';
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = bar_width;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };

  let tick = () => {
    animationLooper(canvas.current);
    this.analyser.getByteTimeDomainData(frequency_array);
    this.rafId = requestAnimationFrame(this.tick);
  };
  //!

  useEffect(() => {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const source = context.createMediaElementSource(song);
    const analyser = context.createAnalyser();
    source.connect(analyser);
    analyser.connect(context.destination);
    console.log(analyser);
    let new_frequency_array = new Uint8Array(analyser.frequencyBinCount);
    setFrequencyArray(new_frequency_array);
    console.log('new', frequency_array);
  }, [song]);

  const pauseHandler = () => {
    if (song.paused) {
      song.play();
      this.rafId = requestAnimationFrame(this.tick);
    } else {
      song.pause();
      cancelAnimationFrame(this.rafId);
    }
  };

  return (
    <div className='App'>
      {/* <Particles options={particlesOptions} /> */}
      <canvas ref={canvas} id='myCanvas' width='500' height='200'></canvas>
      <button onClick={pauseHandler}>Play/Pause</button>
    </div>
  );
}

export default App;
