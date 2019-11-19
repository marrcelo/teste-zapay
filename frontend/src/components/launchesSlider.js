import React, { Component } from 'react';
import Slider from 'react-slick';
import LauncheCard from './launcheCard';

import Spinner from 'react-bootstrap/Spinner';
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
      // appendDots: dots => (
      //   <div
      //     style={{
      //       borderRadius: '10px',
      //       padding: '5px'
      //     }}
      //   >
      //     <ul style={{ margin: '0px' }}> {dots} </ul>
      //   </div>
      // ),
      // customPaging: i => (
      //   <div
      //     style={{
      //       width: '15px',
      //       color: 'blue',
      //       border: '1px blue solid'
      //     }}
      //   >
      //     {i + 1}
      //   </div>
      // )
    };
    return (
      <div style={{ width: '85%' }}>
        <Slider {...settings}>
          {this.state.launches.map(launche => (
            <LauncheCard key={launche._id} launche={launche}></LauncheCard>
          ))}
        </Slider>
      </div>
    );
  }
}
