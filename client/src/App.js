import React, { useEffect, useState } from 'react';
import Particles from './Components/Particles';
// import Visualizer from './Components/Visualizer';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';

export default function App() {
  const [response, setResponse] = useState({ apiResponse: '' });

  const fetchData = async () => {
    await fetch('api/')
      .then((res) => res.text())
      .then((res) => setResponse({ apiResponse: res }));
  };
  // useEffect(() => {
  //   fetchData();
  //   console.log(response);
  // }, []);

  return (
    <Provider store={store}>
      <div className='App'>
        {/* <Visualizer /> */}
        <p style={{ fontSize: '58px', color: 'white' }}>
          {response.apiResponse}
        </p>
        <button onClick={fetchData}></button>
        <Particles />
      </div>
    </Provider>
  );
}
