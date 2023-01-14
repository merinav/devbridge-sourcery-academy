import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Controller, Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './GalleryMediaCarousel.module.scss';

const cn = classNames.bind(styles);

const GalleryMediaCarousel = ({ mediaData }) => {
  return (
    <div>
      <Swiper
        // modules={[Navigation, Pagination, Controller]}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
      >
        {mediaData.map((mediaItem) => (
          <SwiperSlide key={mediaItem.src} className={cn('swiper-slide')}>
            <div className={cn('swiper-slide-content')}>
              <div className={cn('swiper-slide-content-inner')}>
                <figure>
                  {mediaItem.type === 'image' ? (
                    <img
                      src={mediaItem.src}
                      alt={`Photo from ${mediaItem.academy} academy`}
                    />
                  ) : (
                    <video
                      src={mediaItem.src}
                      title={`Video from ${mediaItem.academy} academy`}
                    />
                  )}
                </figure>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

GalleryMediaCarousel.propTypes = {
  mediaData: PropTypes.array.isRequired,
};
export default GalleryMediaCarousel;
