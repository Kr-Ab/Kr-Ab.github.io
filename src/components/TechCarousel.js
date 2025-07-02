import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import styles from './TechCarousel.module.css';

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3500,
  centerMode: true,
  centerPadding: '0',
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function TechCarousel({ items, renderItem, settings }) {
  return (
    <Slider {...defaultSettings} {...settings} className={styles.skillsCarousel}>
      {items.map(renderItem)}
    </Slider>
  );
}

TechCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  settings: PropTypes.object,
};
