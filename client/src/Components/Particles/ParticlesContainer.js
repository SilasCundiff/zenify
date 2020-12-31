import React, { Component, createRef } from 'react';
import Particles from 'react-tsparticles';
import particlesOptions from './particles.json';
import { connect } from 'react-redux';
import { setNowPlaying } from '../../actions/nowPlaying.js';
import { setSongAnalysis } from '../../actions/songAnalysis.js';

let speed = 1;
let localSections;
let songStartTimestamp,
  songEndTimestamp,
  timePassed,
  currentSection,
  prevSection,
  start;

class ParticlesContainer extends Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
    this.ParticleOptions = particlesOptions;
    this.isPlaying = this.props.isPlaying;
    this.duration = this.props.duration;
    this.progress = this.props.progress;
    // this.sections = this.props.sections;
    // this.segments = this.props.segments;
    this.songStartTimestamp = null;
    this.songEndTimestamp = null;
    this.remainingDuration = this.props.duration - this.props.progress;
  }

  componentDidMount() {
    this.segments = this.props.segments;
    currentSection = this.props.segments[0];
    this.containerRef.current = this.getContainer(this.containerRef.current);
  }

  getContainer = (container) => {
    // console.clear();
    // console.log(container.options.particles.move.noise);
    // console.log(container.setNoise);
    // container.options.particles.move.noise.enable = true;
    container.options.particles.move.noise.delay.value = 0.001;
    // container.options.particles.move.noise.delay.random.enable = false;
    // container.options.particles.color.animation.sync = true;

    // console.log('speed', speed);
    // console.log(
    //   'container.options.particles.',
    //   container.options.background.color.value
    // );
    container.setNoise({
      init: function () {},
      update: function () {},
      generate: function (p) {
        p.moveSpeed = speed;
        // console.log('p', p);
        // logLimiter(p.container, false);
        if (!p.noiseAngle) {
          p.noiseAngle = 0;
        }
        p.velocity.horizontal = 0;
        p.noiseAngle = 0;
        return {
          angle: p.noiseAngle,
          length: 0,
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

    //! date experimenting *I don't get to do this often
    let date = new Date();
    songStartTimestamp = date.getTime();
    // songEndTimestamp = date.getTime() + this.remainingDuration;

    //! remove
    // console.log('localSections', localSections);
    // console.log('songStartTimestamp', songStartTimestamp);
    // console.log('songEndTimestamp', songEndTimestamp);
    // console.log('this.isPlaying', this.isPlaying);
    // console.log('this.duration', this.duration);
    // console.log('this.progress', this.progress);
    // console.log('this.segments', this.segments.length);
    // console.log('this.remainingDuration', this.remainingDuration);
    //! end remove

    //!
    this.togglePlay();
  }
  togglePlay = () => {
    if (this.isPlaying) {
      this.requestAnimationFrame = requestAnimationFrame(this.tick);
    } else {
      speed = 1;
      cancelAnimationFrame(this.requestAnimationFrame);
    }
  };

  tick = () => {
    this.timeKeeper();
    this.requestAnimationFrame = requestAnimationFrame(this.tick);
  };

  timeKeeper = () => {
    // console.log('this');
    const date = new Date();
    timePassed = date - songStartTimestamp + this.progress;

    if (
      this.props.segments.length > 0 &&
      timePassed > 0 &&
      this.props.segments[0].start !== undefined
    ) {
      for (let i = 0; this.props.segments.length >= i; i++) {
        if (i < this.props.segments.length - 1) {
          if (
            Math.floor(this.props.segments[i].start * 1000) < timePassed &&
            Math.floor(this.props.segments[i + 1].start * 1000) > timePassed &&
            this.props.segments[i] !== currentSection
          ) {
            currentSection = this.props.segments[i];
            let decibels = currentSection.loudness_max + 30;
            speed = decibels * 0.2;
            break;
          }
        }
      }
      // this.sections.forEach((section) => {
      //   if (Math.floor(section.start * 1000) < timePassed &&) {
      //     console.log('section', section);
      //   }
      // });
      // console.log('this worked');
      // let firstSection = this.sections[0];
      // let firstSectionEndTime =
      //   Math.floor(firstSection.start * 1000) +
      //   Math.floor(firstSection.duration * 1000);
      // console.log('firstSectionEndTime', firstSectionEndTime);
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
          style={{ zIndex: -100, position: 'relative', pointerEvents: 'none' }}
          container={this.containerRef}
          id='tsparticles'
          options={this.ParticleOptions}
        />
      </>
    );
  }
}
const mapStateTopProps = (state) => ({
  isPlaying: state.setNowPlaying.isPlaying,
  duration: state.setNowPlaying.durationMs,
  progress: state.setNowPlaying.progressMs,
  sections: state.setSongAnalysis.sections,
  segments: state.setSongAnalysis.segments,
});
export default connect(mapStateTopProps, { setNowPlaying, setSongAnalysis })(
  ParticlesContainer
);
