import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';
import LauncheCardModal from './launcheCardModal';

const spacexLogo = 'https://cdn.iconscout.com/icon/free/png-256/spacex-282142.png';

export default class LauncheBigCard extends Component {
  state = { launche: {}, requestFailed: false };

  componentDidMount() {
    fetch(`${this.props.url}`)
      .then(res => res.json())
      .then(data => {
        try {
          return this.setState({ launche: JSON.parse(data), requestFailed: false });
        } catch (error) {
          console.error(error);
        }
      })
      .catch(this.setState({ requestFailed: true }));
  }

  render() {
    const { requestFailed } = this.state;
    if (requestFailed) {
      return (
        <div>
          <p>Opss.. Aconteceu algum problema :(</p>
        </div>
      );
    } else {
      return (
        <Card className='launcheCardBig-size'>
          <Card.Body>
            <Card.Title>{this.state.launche.mission_name}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              {dayjs(this.state.launche.launch_date_utc)
                .locale('pt-br')
                .format('D MMMM YYYY, HH:mm')}
            </Card.Subtitle>
            <Card.Img
              className='launcheCardBig-img-size'
              variant='bottom'
              src={(this.state.launche.links && this.state.launche.links.mission_patch_small) || spacexLogo}
            />
            <div className='padding-10px'></div>
            <LauncheCardModal launche={this.state.launche}></LauncheCardModal>
          </Card.Body>
        </Card>
      );
    }
  }
}
