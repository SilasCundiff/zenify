import React, { Component, createRef } from 'react';
import Particles from 'react-tsparticles';
import particlesOptions from './particles.json';
import { connect } from 'react-redux';
import { setNowPlaying } from '../../actions/nowPlaying.js';
import { setSongAnalysis } from '../../actions/songAnalysis.js';

let speed = 1;
let colorH = 141;
let colorS = 73;
let dance = 0;
let opacity = 0.8;
let vertical = 0;
let horizontal = 0;
let songStartTimestamp, timePassed, currentSegment;

class ParticlesContainer extends Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
    this.ParticleOptions = particlesOptions;
    this.isPlaying = this.props.isPlaying;
    this.duration = this.props.duration;
    this.progress = this.props.progress;
    this.songStartTimestamp = null;
    this.remainingDuration = this.props.duration - this.props.progress;
  }

  componentDidMount() {
    this.segments = this.props.segments;
    currentSegment = this.props.segments[0];
    this.containerRef.current = this.getContainer(this.containerRef.current);
  }

  getContainer = (container) => {
    container.options.particles.move.noise.delay.value = 0.0025;
    container.options.particles.move.noise.delay.random.enable = true;

    container.setNoise({
      init: function () {},
      update: function () {},
      generate: function (p) {
        p.opacity.value = opacity;
        p.moveSpeed = speed;
        p.color.value.h = colorH;
        p.color.value.s = colorS;
        if (!p.noiseAngle) {
          p.noiseAngle = 0;
        }
        p.velocity.horizontal = horizontal;
        p.noiseAngle = dance;
        return {
          angle: p.noiseAngle,
          length: 0.2,
        };
      },
    });
    return container;
  };

  componentDidUpdate() {
    this.segments = this.props.segments;
    this.isPlaying = this.props.isPlaying;
    this.remainingDuration = this.props.duration - this.props.progress;
    this.duration = this.props.duration;
    this.progress = this.props.progress;

    let date = new Date();
    songStartTimestamp = date.getTime();

    this.togglePlay();
  }
  togglePlay = () => {
    if (this.isPlaying) {
      this.requestAnimationFrame = requestAnimationFrame(this.tick);
    } else {
      speed = 1;
      colorH = 141;
      colorS = 73;
      dance = 0;
      opacity = 0.8;
      vertical = 0;
      horizontal = 0;
      cancelAnimationFrame(this.requestAnimationFrame);
    }
  };

  tick = () => {
    this.timeKeeper();
    this.requestAnimationFrame = requestAnimationFrame(this.tick);
  };

  timeKeeper = () => {
    const date = new Date();
    timePassed = date - songStartTimestamp + this.progress;

    if (
      this.props.segments.length > 0 &&
      timePassed > 0 &&
      this.props.segments[0].start !== undefined &&
      this.props.isPlaying
    ) {
      for (let i = 0; this.props.segments.length >= i; i++) {
        if (i < this.props.segments.length - 1) {
          if (
            Math.floor(this.props.segments[i].start * 1000) < timePassed &&
            Math.floor(this.props.segments[i + 1].start * 1000) > timePassed &&
            this.props.segments[i] !== currentSegment
          ) {
            currentSegment = this.props.segments[i];
            let decibels = currentSegment.loudness_start + 60;
            let color = currentSegment.timbre[0];
            let flatness = currentSegment.timbre[2];
            let brightness = currentSegment.timbre[1];
            let attack = currentSegment.timbre[3];
            let mids = currentSegment.timbre[5];

            speed = decibels * 0.2;
            colorS = flatness * 10;
            if (colorS > 90) {
              colorS = 90;
            } else if (colorS < 50) {
              colorS = 50;
            }
            colorH = (color * speed) / 1.5;
            vertical = ((attack % speed) / 2) % 2;
            if (isNaN(vertical)) {
              vertical = 0;
            }

            if (i % 20 === 0) {
              dance = brightness / 2 - mids;
            } else {
              dance = brightness * 2 + mids;
            }

            break;
          }
        }
      }
    }
  };
  componentWillUnmount() {
    this.togglePlay();
    cancelAnimationFrame(this.requestAnimationFrame);
  }

  render() {
    return (
      <>
        <Particles
          style={{ pointerEvents: 'none' }}
          container={this.containerRef}
          id='tsparticles'
          options={this.ParticleOptions}
        />
      </>
    );
  }
}
const mapStateTopProps = (state) => ({
  segments: state.setSongAnalysis.segments,
});
export default connect(mapStateTopProps, { setNowPlaying, setSongAnalysis })(
  ParticlesContainer
);
