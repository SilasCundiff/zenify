import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import songFile from '../../Audio/senseless.mp3';
import Particles from 'react-tsparticles';
import particlesOptions from './particles.json';

// let canvasContext;
let speed = 0;
// let tone;
// let h, s, l;
class ParticlesContainer extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(songFile);
    // this.canvasRef = createRef();
    this.containerRef = createRef();
    this.ParticleOptions = particlesOptions;
  }

  async componentDidMount() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.analyserNode = new AnalyserNode(this.audioCtx, {
      fftSize: 64,
      smoothingTimeConstant: 0.5,
      maxDecibels: -30,
      minDecibels: -100,
    });
    if (this.context.state === 'suspended') {
      await this.context.resume();
    }
    this.source = this.audioCtx.createMediaElementSource(this.audio);
    this.source.connect(this.analyserNode);
    this.analyserNode.connect(this.audioCtx.destination);
    this.freqDataArray = new Uint8Array(this.analyserNode.frequencyBinCount);
    this.bufferLength = this.analyserNode.frequencyBinCount;
    this.containerRef.current = this.getContainer(this.containerRef.current);
  }
  // setCanvas(canvas) {
  //   // let width = (canvas.width = this.canvasRef.current.width);
  //   // let height = (canvas.height = this.canvasRef.current.height);
  //   // const barWidth = width / this.bufferLength;
  //   // canvasContext = canvas.getContext('2d');
  //   // canvasContext.clearRect(0, 0, width, height);
  //   // this.freqDataArray.forEach((item, index) => {
  //   //   const y = ((item / 255) * height) / 4;
  //   //   const x = barWidth * index;
  //   //   h = (y / height) * 800;
  //   //   s = '50%';
  //   //   l = '60%';
  //   //   tone = `hsl(${h},${s},${l})`;
  //   //   // console.log('tone', tone);
  //   //   canvasContext.fillStyle = tone;
  //   //   canvasContext.fillRect(x, height - y, barWidth, y);
  //   // });
  //   // console.log('speed', speed);
  // }

  // handleResize() {
  //   // this.canvasRef.current.width =
  //   //   this.canvasRef.current.clientWidth * window.devicePixelRatio;
  //   // this.canvasRef.current.height =
  //   //   this.canvasRef.current.clientHeight * window.devicePixelRatio;
  // }
  getContainer = (container) => {
    // console.clear();
    // console.log(container.options.particles.move.noise);
    // console.log(container.setNoise);
    container.options.particles.move.noise.enable = true;
    container.options.particles.move.noise.delay.value = 0.1;
    container.options.particles.move.noise.delay.random.enable = false;
    container.options.particles.color.animation.sync = true;

    // console.log('speed', speed);
    // console.log(
    //   'container.options.particles.',
    //   container.options.background.color.value
    // );
    container.setNoise({
      init: function () {},
      update: function () {},
      generate: function (p) {
        p.moveSpeed = (speed / 255) * 5;
        // logLimiter(p.container, false);
        if (!p.noiseAngle) {
          p.noiseAngle = 0;
        }
        p.velocity.horizontal = 0;
        p.noiseAngle = 1;
        return {
          angle: p.noiseAngle,
          length: 0,
        };
      },
    });
    return container;
  };

  togglePlay = () => {
    const { audio } = this;
    if (audio.paused) {
      this.audioCtx.resume();
      audio.play();
      // this.handleResize();
      this.requestAnimationFrame = requestAnimationFrame(this.tick);
    } else {
      audio.pause();
      speed = 0.5;
      cancelAnimationFrame(this.requestAnimationFrame);
    }
  };

  tick = () => {
    // this.setCanvas(this.canvasRef.current);
    this.analyserNode.getByteFrequencyData(this.freqDataArray);

    this.requestAnimationFrame = requestAnimationFrame(this.tick);
    speed = this.freqDataArray[5];
  };

  componentWillUnmount() {
    cancelAnimationFrame(this.requestAnimationFrame);
    this.analyserNode.disconnect();
    this.source.disconnect();
  }

  //!REMOVE You dispatch an action which the store uses to call a reducer
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };
  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };

  render() {
    return (
      <>
        <button
          style={{
            zIndex: 2,
            opacity: 1,
          }}
          onClick={this.togglePlay}
        >
          Play/Pause
        </button>
        {/* <canvas
          style={{
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
            width: '100vw',
            height: '100vh',
          }}
          ref={this.canvasRef}
        /> */}
        <Particles
          style={{ zIndex: -100, position: 'relative', pointerEvents: 'none' }}
          container={this.containerRef}
          id='tsparticles'
          options={this.ParticleOptions}
        />
        <div className='counter'>
          <h2>Counter</h2>
          <button onClick={this.decrement}>&ndash;</button>
          <span className='count'>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </>
    );
  }
}
//!REMOVE to update state, you map state to props, then you can dispatch an action to update the state in your file
const mapStateToProps = (state) => ({
  count: state.counterReducer.count,
});
//!REMOVE connect(mapStateToProps)() connects this component to state
export default connect(mapStateToProps)(ParticlesContainer);
