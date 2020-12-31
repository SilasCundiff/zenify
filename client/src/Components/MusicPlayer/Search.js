import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setNowPlaying } from '../../actions/nowPlaying.js';
import Spotify from 'spotify-web-api-js';
import SpotifyPlayer from 'react-spotify-web-playback';
const spotifyWebApi = new Spotify();

function Search({ token, setNowPlaying }) {
  const [search, setSearch] = useState('');
  const [tracks, setTracks] = useState();
  const [message, setMessage] = useState('Search for a track');
  const [selected, setSelected] = useState({
    type: '',
    id: '',
  });

  //Taken from Spotify web api example and altered to fit my needs
  spotifyWebApi.setAccessToken(token);
  let prev = null;
  let results = null;

  const onUserSubmit = (q) => {
    if (prev !== null) {
      prev.abort();
    }

    prev = spotifyWebApi.searchTracks(q, { limit: 10 });
    prev
      .then(
        (data) => {
          let newTracks = [];
          prev = null;
          results = data;
          results.tracks.items.map((item) => {
            return newTracks.push(item);
          });
          return newTracks;
        },
        (err) => {
          console.error(err);
        }
      )
      .then((returnedTracks) => {
        // console.log('returnedTracks', returnedTracks);
        if (returnedTracks.length > 0) {
          setTracks(returnedTracks);
          setMessage('Search for a track');
        } else {
          setMessage('No Results Found, please try a different track name');
        }
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    await onUserSubmit(search);
  };
  const handleSelected = (type, id) => {
    setSelected({
      ...selected,
      type: `${type}`,
      id: `${id}`,
    });
    // console.log('selected', selected);
  };

  const getNowPlaying = (state) => {
    setNowPlaying(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='trackSearch'>{message}</label>
        <input
          name='trackSearch'
          type='text'
          value={search || ''}
          onChange={handleChange}
        />
      </form>
      {selected.id ? (
        <SpotifyPlayer
          styles={{
            activeColor: '#fff',
            bgColor: '#333',
            color: '#fff',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
          }}
          token={token}
          uris={[`spotify:${selected.type}:${selected.id}`]}
          callback={(state) => {
            getNowPlaying(state);
          }}
        />
      ) : null}
      <ul>
        {tracks
          ? tracks.map((track) => {
              return (
                <li
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}
                  key={`${track.type}:${track.id}`}
                >
                  <span
                    onClick={() => {
                      handleSelected(track.type, track.id);
                    }}
                    style={{ alignSelf: 'left' }}
                  >
                    {track.name}
                  </span>
                  <span
                    onClick={() => {
                      handleSelected(track.album.type, track.album.id);
                    }}
                    style={{ alignSelf: 'left' }}
                  >
                    {track.album.name}
                  </span>
                  <span
                    onClick={() => {
                      handleSelected(
                        track.artists[0].type,
                        track.artists[0].id
                      );
                    }}
                    style={{ alignSelf: 'left' }}
                  >
                    {track.artists[0].name}
                  </span>
                  <span>
                    <img
                      src={track.album.images[2].url}
                      alt={`${track.album.name}`}
                    />
                  </span>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default connect(null, { setNowPlaying })(Search);
