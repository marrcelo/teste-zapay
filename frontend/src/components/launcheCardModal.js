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
          <p>
            <strong>Nome do foguete: </strong> {launche.rocket && launche.rocket.rocket_name}
          </p>
          <p>
            <strong>Tipo do foguete: </strong> {launche.rocket && launche.rocket.rocket_type}
          </p>
          <p>
            <strong>Data de lançamento: </strong>
            {dayjs(launche.launch_date_utc)
              .locale('pt-br')
              .format('D MMMM YYYY, HH:mm')}
          </p>
          {launche.links && launche.links.article_link && (
            <p>
              <strong>Artigo:</strong> <a href={launche.links.article_link}> Link </a>
            </p>
          )}
          {launche.links && launche.links.wikipedia && (
            <p>
              <strong>Wikipedia:</strong> <a href={launche.links.wikipedia}> Wikipedia </a>
            </p>
          )}
          {launche.links && launche.links.video_link && (
            <p>
              <strong>Video: </strong> <a href={launche.links.video_link}> Video </a>
            </p>
          )}
          {launche.details && (
            <p>
              <strong>Detalhes: </strong> {launche.details}
            </p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LauncheCardModal;
