import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import '../App.css';

const spacexLogo = 'https://cdn.iconscout.com/icon/free/png-256/spacex-282142.png';

const NextArrow = props => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
};

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
};

export default class LaunchesSlider extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  state = {
    contacts: [],
    width: 128
  };

  componentDidMount() {
    fetch(`${this.props.url}`)
      .then(res => res.json())
      .then(data => {
        console.log(JSON.parse(data));
        const info = Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [JSON.parse(data)];
        return this.setState({ contacts: info });
      })
      .catch(console.log);
  }

  render() {
    const settings = {
      pauseOnFocus: true,
      pauseOnHover: true,
      autoplay: true,
      autoplaySpeed: 2500,
      focusOnSelect: true,
      dots: false,
      accessibility: true,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div
        style={{
          width: '85%'
        }}
      >
        <Slider {...settings}>
          {this.state.contacts.map(contact => (
            <div
              key={contact.flight_number}
              style={{
                width: this.state.width + 'px'
              }}
            >
              <Card
                style={{
                  // width: '400px',
                  height: '400px'
                }}
              >
                <Card.Body>
                  <Card.Title>{contact.mission_name}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>Card Subtitle</Card.Subtitle>
                  <Card.Img variant='bottom' src={contact.links.mission_patch_small || spacexLogo} />
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text> */}
                  <Card.Link href='#'>Card Link</Card.Link>
                  <Card.Link href='#'>Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
