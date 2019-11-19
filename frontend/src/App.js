import React, { Component } from 'react';
import LaunchesSlider from './components/launchesSlider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <center>
        <p>Ultimo</p>
        <LaunchesSlider url='http://127.0.0.1:8000/service/latest' />

        <p>Proximo</p>
        <LaunchesSlider url='http://127.0.0.1:8000/service/next' />

        <p>Anteriores</p>
        <LaunchesSlider url='http://127.0.0.1:8000/service/past?sort=launch_date_utc&order=desc' />

        <p>Proximos</p>
        <LaunchesSlider url='http://127.0.0.1:8000/service/upcoming?sort=launch_date_utc&order=asc' />
      </center>
    );
  }
}

export default App;
