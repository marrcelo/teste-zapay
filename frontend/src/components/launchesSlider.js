import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Slider from 'react-slick';
import '../App.css';
import LauncheCard from './launcheCard';

const NextArrow = props => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
};

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
};

export default class LaunchesSlider extends Component {
  state = { launches: [] };

  componentDidMount() {
    fetch(`${this.props.url}`)
      .then(res => res.json())
      .then(data => {
        return this.setState({ launches: JSON.parse(data) });
      })
      .catch(console.log);
  }

  componentWillMount() {
    return <Spinner animation='grow' />;
  }

  render() {
    const settings = {
      // lazyLoad: 'progressive',
      pauseOnFocus: true,
      pauseOnHover: true,
      autoplay: false,
      autoplaySpeed: 2500,
      focusOnSelect: true,
      dots: false,
      accessibility: true,
      infinite: false,
      speed: 550,
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
      <div className='slider-width'>
        <Slider {...settings}>
          {this.state.launches.map(launche => (
            <LauncheCard key={launche._id} launche={launche}></LauncheCard>
          ))}
        </Slider>
      </div>
    );
  }
}
