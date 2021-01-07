import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setNowPlaying } from '../../actions/nowPlaying.js';
import Spotify from 'spotify-web-api-js';
import SpotifyPlayer from 'react-spotify-web-playback';
import './searchStyles.css';
import icon from '../icon.svg';
import Footer from './Footer';
const spotifyWebApi = new Spotify();
function Search({ token, setNowPlaying }) {
  const [search, setSearch] = useState('');
  const [tracks, setTracks] = useState();
  const [message, setMessage] = useState('Enter a Track');
  const [selected, setSelected] = useState({
    type: '',
    id: '',
  });
  const [zen, setZen] = useState(false);
  const [zenPlayer, setZenPlayer] = useState(true);

  //Taken from Spotify web api example and altered to fit my needs
  spotifyWebApi.setAccessToken(token);
  let prev = null;
  let results = null;

  const onUserSubmit = (q) => {
    if (prev !== null) {
      prev.abort();
    }

    prev = spotifyWebApi.searchTracks(q, { limit: 20 });
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
          setMessage('Enter a Track');
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

    if (search) {
      await onUserSubmit(search);
    }
  };
  const handleSelected = (type, id) => {
    setSelected({
      ...selected,
      type: `${type}`,
      id: `${id}`,
    });
    setZenPlayer(false);
  };

  const getNowPlaying = (state) => {
    setNowPlaying(state);
    // console.log(state);
  };
  const handleClick = () => {
    setZen(!zen);
  };
  const handleClick2 = () => {
    setZenPlayer(!zenPlayer);
  };

  return (
    <div>
      <div className='buttonContainer'>
        <button
          className={`ZenModePlayer`}
          id='ZenPlayerButton'
          onClick={handleClick2}
        >
          {`${zenPlayer ? 'Show' : 'Hide'}`} Zenify Player
        </button>
        <button
          id='ZenButton'
          className={`ZenMode`}
          onClick={handleClick}
        >
          {`${zen ? 'Show' : 'Hide'}`} Zenify Search
        </button>
      </div>
      <div className={`spotifyBody ${zen ? 'zen' : 'nozen'}`}>
        <div className='Search'>
          <form className='SearchForm show' onSubmit={handleSubmit}>
            <label htmlFor='trackSearch'>{message}</label>
            <input
              name='trackSearch'
              type='text'
              value={search || ''}
              onChange={handleChange}
            />
            <button onClick={handleSubmit} className='searchButton'>
              <i class='fas fa-search'></i>
            </button>
          </form>
        </div>
        <img src={icon} alt='Silvanus Designs' className='searchLogo' />
        <div className={`searchResultsTable ${tracks ? 'show' : 'hide'}`}>
          <table>
            {tracks ? (
              <thead>
                <tr>
                  <th>Album cover</th>
                  <th>Track Name</th>
                  <th>Album</th>
                  <th>Artist</th>
                </tr>
              </thead>
            ) : null}

            {tracks ? (
              <tbody>
                {tracks.map((track) => {
                  return (
                    <tr key={`${track.type}:${track.id}`}>
                      <td className='td-image'>
                        <img
                          className='searchResultAlbumImage'
                          src={track.album.images[2].url}
                          alt={`${track.album.name}`}
                        />
                      </td>
                      <td
                        className='td-track'
                        onClick={() => {
                          handleSelected(track.type, track.id);
                        }}
                      >
                        {track.name}
                      </td>
                      <td
                        className='td-album'
                        onClick={() => {
                          handleSelected(track.album.type, track.album.id);
                        }}
                      >
                        {track.album.name}
                      </td>
                      <td
                        className='td-artist'
                        onClick={() => {
                          handleSelected(
                            track.artists[0].type,
                            track.artists[0].id
                          );
                        }}
                      >
                        {track.artists[0].name}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : null}
          </table>
        </div>
      </div>
      <div className={`Player ${zenPlayer ? 'zen' : 'nozen'}`}>
        {selected.id ? (
          <SpotifyPlayer
            styles={{
              bgColor: '#191414',
              color: '#1DB954',
              loaderColor: '#1DB954',
              sliderColor: '#1DB954',
              trackArtistColor: '#1DB954',
              trackNameColor: '#1DB954',
            }}
            token={token}
            uris={[`spotify:${selected.type}:${selected.id}`]}
            callback={async (state) => {
              // console.log(await state);
              getNowPlaying(await state);
            }}
          />
        ) : null}
      </div>
      {!zen ? <Footer /> : null}
    </div>
  );
}

export default connect(null, { setNowPlaying })(Search);
