import React from 'react';
import './PlayerControls.css';

function PlayerControls({ musicInfo }) {
  console.log('musicInfo', musicInfo);
  const backgroundStyles = {
    backgroundImage: `url(${musicInfo.nowPlaying.image})`,
  };

  const progressBarStyles = {
    width:
      (musicInfo.progress_ms * 100) / musicInfo.nowPlaying.duration_ms + '%',
  };
  return (
    <div>
      <div className='main-wrapper'>
        <div className='now-playing__img'>
          <img alt='image of now playing' src={musicInfo.nowPlaying.image} />
        </div>
        <div className='now-playing__side'>
          <div className='now-playing__name'>{musicInfo.name}</div>
          <div className='now-playing__status'>
            {musicInfo.is_playing ? 'Playing' : 'Paused'}
          </div>
          <div className='progress'>
            <div className='progress__bar' style={progressBarStyles} />
          </div>
        </div>
        <div className='background' style={backgroundStyles} />{' '}
      </div>
    </div>
  );
}

export default PlayerControls;
