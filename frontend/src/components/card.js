import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';

const spacexLogo = 'https://cdn.iconscout.com/icon/free/png-256/spacex-282142.png';

const Example = ({ launche }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='pull-right' variant='primary' size='sm' onClick={handleShow}>
        Mais Informações
      </Button>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{launche.mission_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{JSON.stringify(launche, null, 2)}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const LauncheCard = ({ launche }) => {
  return (
    <Card style={{ minHeight: '400px' }}>
      <Card.Body>
        <Card.Title>{launche.mission_name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {dayjs(launche.launch_date_utc).locale('pt-br').format('D MMMM YYYY, HH:mm')}
        </Card.Subtitle>
        <Card.Img variant='bottom' src={launche.links.mission_patch_small || spacexLogo} />
        <br></br>
        <Example launche={launche}></Example>
      </Card.Body>
    </Card>
  );
};

export default LauncheCard;
