import React, { Component } from 'react';
import LaunchesSlider from './components/launchesSlider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <center>
        {/* <p>Ultimo</p>
        <LaunchesSlider url='https://zapayapi-prod.herokuapp.com/service/latest' />

        <p>Proximo</p>
        <LaunchesSlider url='https://zapayapi-prod.herokuapp.com/service/next' />
 */}
        <p>Anteriores</p>
        <LaunchesSlider url='https://zapayapi-prod.herokuapp.com/service/past?sort=launch_date_utc&order=desc' />

        <p>Proximos</p>
        <LaunchesSlider url='https://zapayapi-prod.herokuapp.com/service/upcoming?sort=launch_date_utc&order=asc' />
      </center>
    );
  }
}

export default App;
