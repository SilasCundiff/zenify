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
  prevSection;

class ParticlesContainer extends Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
    this.ParticleOptions = particlesOptions;
    this.isPlaying = this.props.isPlaying;
    this.duration = this.props.duration;
    this.progress = this.props.progress;
    this.sections = this.props.sections;
    this.songStartTimestamp = null;
    this.songEndTimestamp = null;
    this.remainingDuration = this.props.duration - this.props.progress;
  }

  async componentDidMount() {
    currentSection = await this.props.sections[0];
    prevSection = currentSection;
    this.togglePlay();
    this.containerRef.current = this.getContainer(this.containerRef.current);
  }

  getContainer = (container) => {
    // console.clear();
    // console.log(container.options.particles.move.noise);
    // console.log(container.setNoise);
    // container.options.particles.move.noise.enable = true;
    container.options.particles.move.noise.delay.value = 0.1;
    container.options.particles.move.noise.delay.random.enable = false;
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
        p.moveSpeed = speed * 2;
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
  componentDidUpdate() {
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
    // console.log('this.sections', this.sections);
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
    const date = new Date();
    timePassed = date - songStartTimestamp + this.progress;
    // localSongSections = this.sections;
    if (this.sections.length > 0 && timePassed > 0) {
      for (let i = 0; this.sections.length > i; i++) {
        if (
          Math.floor(this.sections[i].start * 1000) < timePassed &&
          Math.floor(this.sections[i + 1].start * 1000) > timePassed
        ) {
          currentSection = this.sections[i];
          speed = (Math.abs(currentSection.loudness) % 2) * 3;
          // if (currentSection !== prevSection) {
          //   prevSection = currentSection;

          // }
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
});
export default connect(mapStateTopProps, { setNowPlaying, setSongAnalysis })(
  ParticlesContainer
);
