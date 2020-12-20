import React from 'react';
import Authentication from './Authentication';
import PlayingInfo from './PlayingInfo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
function MusicPlayer({ isLoggedIn, token }) {
  return (
    <div>
      {!isLoggedIn ? <Authentication /> : null}
      {isLoggedIn && <PlayingInfo token={token} />}
    </div>
  );
}
MusicPlayer.propTypes = {
  token: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};
const mapStateTopProps = (state) => ({
  token: state.setToken.accessToken,
  isLoggedIn: state.setToken.isLoggedIn,
});
export default connect(mapStateTopProps)(MusicPlayer);
