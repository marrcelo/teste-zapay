import React, { Component } from 'react';
import Slider from 'react-slick';
import LauncheCard from './card';
import '../App.css';

const NextArrow = props => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
};

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
};

export default class LaunchesSlider extends Component {
  state = {
    launches: [],
    width: 128
  };

  componentDidMount() {
    fetch(`${this.props.url}`)
      .then(res => res.json())
      .then(data => {
        return this.setState({ launches: JSON.parse(data) });
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
      <div style={{ width: '85%' }}>
        <Slider {...settings}>
          {this.state.launches.map(launche => (
            <LauncheCard key={launche.flight_number} launche={launche}></LauncheCard>
          ))}
        </Slider>
      </div>
    );
  }
}
