import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import './App.css';
import LauncheBigCard from './components/launcheBigCard';
import LaunchesSlider from './components/launchesSlider';

class App extends Component {
  render() {
    return (
      <Col lg={12} xs={12} md={12}>
        <Navbar bg='light'>
          <Navbar.Brand href='#'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/320px-SpaceX-Logo.svg.png'
              className='d-inline-block align-top navbar-brand-img-size'
              alt='SpaceX logo'
            />
          </Navbar.Brand>
        </Navbar>
        <br />
        <Row>
          <Col lg={6} xs={12} md={6}>
            <center>
              <h2>Ultimo Lançamento</h2>
              <LauncheBigCard url='https://zapayapi-prod.herokuapp.com/service/latest' />
            </center>
          </Col>

          <Col lg={6} xs={12} md={6}>
            <center>
              <h2>Proximo Lançamento</h2>
              <LauncheBigCard url='https://zapayapi-prod.herokuapp.com/service/next' />
            </center>
          </Col>
        </Row>

        <div className='paddingBottom-25px'>
          <h3 className='h3-padding'>Lançamentos Anteriores</h3>
          <center>
            <LaunchesSlider url='https://zapayapi-prod.herokuapp.com/service/past?sort=launch_date_utc&order=desc&id=true' />
          </center>

          <h3 className='h3-padding'>Proximos Lançamentos</h3>
          <center>
            <LaunchesSlider url='https://zapayapi-prod.herokuapp.com/service/upcoming?sort=launch_date_utc&order=asc&id=true' />
          </center>
        </div>
        <Navbar bg='light' className='justify-conten-center'>
          <Navbar.Text>
            Feito por: <a href='https://github.com/marrcelo'>Marcelo Magalhães</a>
          </Navbar.Text>
        </Navbar>
      </Col>
    );
  }
}

export default App;
