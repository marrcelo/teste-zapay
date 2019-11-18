import React, { Component } from 'react';
import '../App.css';
import Slider from 'react-slick';

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
    fetch(`${this.props.url}?sort=${encodeURIComponent('launch_date_utc')}&order=desc`)
      .then(res => res.json())
      .then(data => {
        console.log(JSON.parse(data));
        const info = Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [JSON.parse(data)];
        this.setState({ contacts: info });
      })
      .catch(console.log);
  }

  render() {
    const settings = {
      focusOnSelect: true,
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
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
          width: '90%'
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
              <center>
                <h4>{contact.mission_name}</h4>
                <div>
                  <img
                    className='logo'
                    src={contact.links.mission_patch_small || spacexLogo}
                    alt={contact.mission_name}
                  />
                  <h6>{contact.rocket_name}</h6>
                  <p>{new Date(contact.launch_date_local).toLocaleDateString()}</p>
                  <p>{new Date(contact.launch_date_local).toLocaleTimeString()}</p>
                </div>
              </center>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
