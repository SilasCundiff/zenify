import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import setToken from '../reducers/auth';
import setNowPlaying from '../reducers/nowPlaying';
function SongAnalyizer({ token, id }) {
  let prevId = id;
  useEffect(() => {
    if (id !== null) {
      fetch(`https://api.spotify.com/v1/audio-analysis/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        mode: 'cors',
        cache: 'default',
      })
        .then((res) => res.json())
        .then((result) => {
          console.log('analysis response', result);
          let sum = 0;
          result.sections.forEach((section) => {
            sum = sum + section.duration;
          });
          console.log('sum of sections duration', sum);
          console.log('duration', result.track.duration);
        })
        .catch((err) => {
          console.log('err', err);
        });
    }
  }, [id, token]);

  return (
    <div style={{ textAlign: 'left' }}>
      <span>token: {token}</span> <br />
      <span>song id: {id}</span>
    </div>
  );
}

const mapStateTopProps = (state) => ({
  token: state.setToken.accessToken,
  id: state.setNowPlaying.id,
});
export default connect(mapStateTopProps, { setToken, setNowPlaying })(
  SongAnalyizer
);
