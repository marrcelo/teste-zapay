import React, { Component } from 'react';
import LaunchesSlider from './components/launchesSlider';
import './App.css';

class App extends Component {
  render() {
    return (
      <center>
        <p>Ultimo</p>
        <LaunchesSlider url='http://127.0.0.1:8000/service/latest' />

        <p>Proximo</p>
        <LaunchesSlider url='http://127.0.0.1:8000/service/next' />

        <p>Anteriores</p>
        <LaunchesSlider url='http://127.0.0.1:8000/service/past' />

        <p>Proximos</p>
        <LaunchesSlider url='http://127.0.0.1:8000/service/upcoming' />
      </center>
    );
  }
}

export default App;
