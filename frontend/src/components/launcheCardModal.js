import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LauncheCardModal = ({ launche }) => {
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
        <Modal.Body>
          <p>Nome do foguete: {launche.rocket && launche.rocket.rocket_name}</p>
          <p>Tipo do foguete: {launche.rocket && launche.rocket.rocket_type}</p>
          <p>
            Data de lançamento:{' '}
            {dayjs(launche.launch_date_utc)
              .locale('pt-br')
              .format('D MMMM YYYY, HH:mm')}
          </p>
          {launche.links && launche.links.article_link && (
            <p>
              Artigo: <a href={launche.links.article_link}> Link </a>
            </p>
          )}
          {launche.links && launche.links.wikipedia && (
            <p>
              Wikipedia: <a href={launche.links.wikipedia}> Wikipedia </a>
            </p>
          )}
          {launche.links && launche.links.video_link && (
            <p>
              Video: <a href={launche.links.video_link}> Video </a>
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LauncheCardModal;
