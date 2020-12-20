import React, { useState, useEffect } from 'react';
import Spotify from 'spotify-web-api-js';
import PlayerControls from './PlayerControls';

const spotifyWebApi = new Spotify();
console.log('spotifyWebApi', spotifyWebApi);
function PlayingInfo({ token }) {
  const [data, setData] = useState({
    nowPlaying: {
      album: '',
      artist: '',
      name: '',
      image: '',
      duration_ms: '',
    },
    is_playing: 'Paused',
    progress_ms: 0,
  });
  useEffect(() => {
    if (token) {
      spotifyWebApi.setAccessToken(token);
      getNowPlaying();
    }
  }, [token]);

  const getNowPlaying = async () => {
    await spotifyWebApi.getMyCurrentPlaybackState().then((res) => {
      try {
        console.log('res', res);
        setData({
          ...data,
          nowPlaying: {
            album: res.item.album.name,
            artists: res.item.artists[0].name,
            name: res.item.name,
            image: res.item.album.images[0].url,
            duration_ms: res.item.duration_ms,
          },
          is_playing: res.is_playing,
          progress_ms: res.progress_ms,
        });
      } catch (err) {
        console.log(err);
        return;
      }
    });
  };
  return (
    <div>
      <h1>Music player</h1>
      <p style={{ fontSize: '58px', color: 'black' }}></p>
      <p>{data.nowPlaying.name}</p>
      <p>{data.nowPlaying.album}</p>
      <p>{data.nowPlaying.artists}</p>

      <img
        src={data.nowPlaying.image}
        alt='album art of current song'
        style={{ width: '250px' }}
      />
    </div>
  );
}

export default PlayingInfo;
