import React from 'react';
// import Particles from './Components/Particles';
// import Visualizer from './Components/Visualizer';
import MusicPlayer from './Components/MusicPlayer';
import SongAnalyizer from './Components/SongAnalyizer';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <Visualizer /> */}
        {/* <Particles /> */}
        <MusicPlayer />
        <SongAnalyizer />
      </div>
    </Provider>
  );
}
