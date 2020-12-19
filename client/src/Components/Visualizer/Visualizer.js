import React, { Component, createRef } from 'react';
import songFile from '../../Audio/senseless.mp3';
let canvasContext;
let tone;
let h, s, l;
export class Visualizer extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(songFile);
    this.canvasRef = createRef();
  }

  async componentDidMount() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.analyserNode = new AnalyserNode(this.audioCtx, {
      fftSize: 64,
      smoothingTimeConstant: 0.5,
      maxDecibels: -10,
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
  }
  setCanvas(canvas) {
    let width = (canvas.width = this.canvasRef.current.width);
    let height = (canvas.height = this.canvasRef.current.height);
    const barWidth = width / this.bufferLength;
    canvasContext = canvas.getContext('2d');
    canvasContext.clearRect(0, 0, width, height);
    this.freqDataArray.forEach((item, index) => {
      const y = ((item / 255) * height) / 4;
      const x = barWidth * index;
      h = (y / height) * 800;
      s = '50%';
      l = '60%';
      tone = `hsl(${h},${s},${l})`;
      canvasContext.fillStyle = tone;
      canvasContext.fillRect(x, height - y, barWidth, y);
    });
  }

  handleResize() {
    this.canvasRef.current.width =
      this.canvasRef.current.clientWidth * window.devicePixelRatio;
    this.canvasRef.current.height =
      this.canvasRef.current.clientHeight * window.devicePixelRatio;
  }

  togglePlay = () => {
    const { audio } = this;
    if (audio.paused) {
      this.audioCtx.resume();
      audio.play();
      this.handleResize();
      this.requestAnimationFrame = requestAnimationFrame(this.tick);
    } else {
      audio.pause();
      cancelAnimationFrame(this.requestAnimationFrame);
    }
  };

  tick = () => {
    this.setCanvas(this.canvasRef.current);
    this.analyserNode.getByteFrequencyData(this.freqDataArray);
    this.requestAnimationFrame = requestAnimationFrame(this.tick);
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
        <canvas
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
        />
      </>
    );
  }
}

export default Visualizer;
