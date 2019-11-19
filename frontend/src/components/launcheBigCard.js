import React, { Component } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import Card from 'react-bootstrap/Card';
import LauncheCardModal from './launcheCardModal';
import '../App.css';

const spacexLogo = 'https://cdn.iconscout.com/icon/free/png-256/spacex-282142.png';

export default class LauncheBigCard extends Component {
  state = { launche: {} };

  componentDidMount() {
    fetch(`${this.props.url}`)
      .then(res => res.json())
      .then(data => {
        console.log(JSON.parse(data));
        return this.setState({ launche: JSON.parse(data) });
      })
      .catch(console.log);
  }

  render() {
    return (
      <Card style={{ height: '450px', width: '450px' }}>
        <Card.Body>
          <Card.Title>{this.state.launche.mission_name}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {dayjs(this.state.launche.launch_date_utc)
              .locale('pt-br')
              .format('D MMMM YYYY, HH:mm')}
          </Card.Subtitle>
          <Card.Img
            style={{ height: '300px', width: '300px' }}
            variant='bottom'
            src={(this.state.launche.links && this.state.launche.links.mission_patch_small) || spacexLogo}
          />
          <div style={{ padding: '10px' }}></div>
          <LauncheCardModal launche={this.state.launche}></LauncheCardModal>
        </Card.Body>
      </Card>
    );
  }
}
