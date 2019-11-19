import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';
import LauncheCardModal from './launcheCardModal';

const spacexLogo = 'https://cdn.iconscout.com/icon/free/png-256/spacex-282142.png';

const LauncheCard = ({ launche }) => {
  return (
    <Card className='launcheCard-size'>
      <Card.Body>
        <Card.Title>{launche.mission_name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {dayjs(launche.launch_date_utc)
            .locale('pt-br')
            .format('D MMMM YYYY, HH:mm')}
        </Card.Subtitle>
        <Card.Img variant='bottom' src={launche.links.mission_patch_small || spacexLogo} />
        <div className='padding-10px'></div>
        <LauncheCardModal launche={launche}></LauncheCardModal>
      </Card.Body>
    </Card>
  );
};

export default LauncheCard;
