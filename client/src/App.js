import React from 'react';
import Particles from './Components/Particles';
import MusicPlayer from './Components/MusicPlayer';
import SongAnalyizer from './Components/SongAnalyizer';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/'>
          <div className='App'>
            <MusicPlayer />
            <SongAnalyizer />
            <Particles
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />
          </div>
        </Route>
      </BrowserRouter>
    </Provider>
  );
}
