import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import styles from './GalleryMediaCarousel.module.scss';

const cn = classNames.bind(styles);
const slickSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const GalleryMediaCarousel = ({ mediaData }) => {
  return (
    <Slider {...slickSliderSettings}>
      {mediaData.map((mediaItem) => (
        <div key={mediaItem.src} className={cn('slick-slider__slide')}>
          {mediaItem.type === 'image' ? (
            <figure>
              <img
                src={mediaItem.src}
                alt={`Photo from ${mediaItem.academy} academy`}
              />
            </figure>
          ) : (
            <div>
              <video
                src={mediaItem.src}
                title={`Video from ${mediaItem.academy} academy`}
              />
            </div>
          )}
        </div>
      ))}
    </Slider>
  );
};

GalleryMediaCarousel.propTypes = {
  mediaData: PropTypes.array.isRequired,
};
export default GalleryMediaCarousel;
