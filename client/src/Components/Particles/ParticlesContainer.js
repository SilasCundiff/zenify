import React, { Component, createRef } from 'react';
import Particles from 'react-tsparticles';
import particlesOptions from './particles.json';
import { connect } from 'react-redux';
import { setNowPlaying } from '../../actions/nowPlaying.js';
import { setSongAnalysis } from '../../actions/songAnalysis.js';
let speed = 0;

class ParticlesContainer extends Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
    this.ParticleOptions = particlesOptions;
    this.isPlaying = this.props.isPlaying;
  }

  async componentDidMount() {
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
    console.log('this.isPlaying', this.isPlaying);
    this.togglePlay();
  }
  togglePlay = () => {
    console.log('this.props.sections', this.props.sections);
    if (this.isPlaying) {
      this.requestAnimationFrame = requestAnimationFrame(this.tick);
    } else {
      speed = 0.5;
      cancelAnimationFrame(this.requestAnimationFrame);
    }
  };

  tick = () => {
    speed = 2;
    this.requestAnimationFrame = requestAnimationFrame(this.tick);
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
  sections: state.setSongAnalysis.sections,
});
export default connect(mapStateTopProps, { setNowPlaying, setSongAnalysis })(
  ParticlesContainer
);
