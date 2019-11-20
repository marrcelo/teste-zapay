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
  state = { launches: [], requestFailed: false, isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(`${this.props.url}`)
      .then(res => res.json())
      .then(data => {
        try {
          return this.setState({ launches: JSON.parse(data), requestFailed: false, isLoading: false });
        } catch (error) {
          this.setState({ requestFailed: true, isLoading: false });
        }
      })
      .catch(console.error);
  }

  render() {
    const settings = {
      pauseOnFocus: true,
      pauseOnHover: true,
      autoplay: false,
      autoplaySpeed: 2500,
      focusOnSelect: true,
      dots: false,
      accessibility: true,
      infinite: false,
      speed: 550,
      slidesToShow: 7,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 2450,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 2100,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
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
    const { isLoading, requestFailed } = this.state;
    if (isLoading) {
      return (
        <>
          <Spinner animation='grow' />
          <Spinner animation='grow' />
          <Spinner animation='grow' />
        </>
      );
    } else if (requestFailed) {
      return (
        <div>
          <p>Opss.. Aconteceu algum problema :(</p>
        </div>
      );
    } else {
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
}
