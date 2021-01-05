import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import setToken from '../reducers/auth';
import setNowPlaying from '../reducers/nowPlaying';
import { setSongAnalysis } from '../actions/songAnalysis';
function SongAnalyizer({ token, id, setSongAnalysis }) {

  useEffect(() => {
    if (id !== '') {
      fetch(`https://api.spotify.com/v1/audio-analysis/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        mode: 'cors',
        cache: 'default',
      })
        .then((res) => res.json())
        .then(async (result) => {
          // console.log('analysis response', result);
          await setSongAnalysis(result);
        })
        .catch((err) => {
          console.log('err', err);
        });
    }
  }, [id, token, setSongAnalysis]);

  return (
    <div style={{ textAlign: 'left' }}>
      {/* <span>token: {token}</span> <br />
      <span>song id: {id}</span> */}
    </div>
  );
}

const mapStateTopProps = (state) => ({
  token: state.setToken.accessToken,
  id: state.setNowPlaying.id,
});
export default connect(mapStateTopProps, {
  setToken,
  setNowPlaying,
  setSongAnalysis,
})(SongAnalyizer);
