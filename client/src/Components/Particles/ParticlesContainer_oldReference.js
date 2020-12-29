import React, { Component, createRef } from 'react';
import songFile from '../../Audio/senseless.mp3';
import Particles from 'react-tsparticles';
import particlesOptions from './particles.json';

let speed = 0;

class ParticlesContainer extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(songFile);
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
      this.requestAnimationFrame = requestAnimationFrame(this.tick);
    } else {
      audio.pause();
      speed = 0.5;
      cancelAnimationFrame(this.requestAnimationFrame);
    }
  };

  tick = () => {
    this.analyserNode.getByteFrequencyData(this.freqDataArray);
    this.requestAnimationFrame = requestAnimationFrame(this.tick);
    speed = this.freqDataArray[5];
  };

  componentWillUnmount() {
    cancelAnimationFrame(this.requestAnimationFrame);
    this.analyserNode.disconnect();
    this.source.disconnect();
  }

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
        <Particles
          style={{ zIndex: -100, position: 'relative', pointerEvents: 'none' }}
          container={this.containerRef}
          id='tsparticles'
          options={this.ParticleOptions}
        />
      </>
    );
  }
}

export default ParticlesContainer;
