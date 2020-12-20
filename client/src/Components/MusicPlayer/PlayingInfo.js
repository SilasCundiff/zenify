import React, { useState, useEffect } from 'react';
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();

function PlayingInfo({ token }) {
  console.log('token', token);
  const [data, setData] = useState({
    nowPlaying: {
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
    }
  }, [token]);

  const getNowPlaying = () => {
    spotifyWebApi.getMyCurrentPlaybackState().then((res) => {
      setData({
        ...data,
        nowPlaying: {
          name: res.item.name,
          image: res.item.album.images[0].url,
          duration_ms: res.item.duration_ms,
        },
        is_playing: res.is_playing,
        progress_ms: res.progress_ms,
      });
    });
  };
  return (
    <div>
      <h1>Music player</h1>
      <p style={{ fontSize: '58px', color: 'black' }}></p>
      <button
        onClick={() => {
          getNowPlaying();
        }}
      >
        check now playing
      </button>
      <div>Now playing: {data.nowPlaying.name}</div>
      <img
        src={data.nowPlaying.image}
        alt='album art of current song'
        style={{ width: '100px' }}
      ></img>
    </div>
  );
}

export default PlayingInfo;
