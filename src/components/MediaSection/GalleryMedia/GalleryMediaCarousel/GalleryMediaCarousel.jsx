import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper';
import Icon_play from '/src/assets/icons/Icon_play.svg';
import styles from './GalleryMediaCarousel.module.scss';
import SliderNavigationButton from './SliderNavigationButton/SliderNavigationButton';

const cn = classNames.bind(styles);

const MEDIA_ITEMS_TO_SHOW = 30;

const GalleryMediaCarousel = ({ mediaData, selectedMediaItem }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const sliderNavigationHandler = () => {};

  return (
    <div className={cn('swiper-wrapper')}>
      <div className={cn('swiper-navigation-wrapper')}>
        <SliderNavigationButton
          direction={'previous'}
          ref={prevRef}
          sliderNavigationHandler={sliderNavigationHandler}
        />
        <SliderNavigationButton
          direction={'next'}
          ref={nextRef}
          sliderNavigationHandler={sliderNavigationHandler}
        />
      </div>

      <Swiper
        grabCursor={true}
        centeredSlides={true}
        modules={[Navigation, Pagination, Keyboard]}
        autoHeight={true}
        loop={true}
        initialSlide={selectedMediaItem}
        navigation={{
          prevEl: prevRef.current ? prevRef.current : null,
          nextEl: nextRef.current ? nextRef.current : null,
        }}
        keyboard={{ enabled: true }}
        a11y={true}
      >
        {mediaData.slice(0, MEDIA_ITEMS_TO_SHOW + 1).map((mediaItem) => {
          const isImage = mediaItem.type === 'image';

          return isImage ? (
            <SwiperSlide key={mediaItem.src}>
              <figure className={cn('carousel-slide__inner-content')}>
                <img
                  src={mediaItem.src}
                  alt={`Photo from ${mediaItem.academy} academy`}
                  className={cn('inner-content__gallery-item')}
                />
              </figure>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={mediaItem.src}>
              <figure className={cn('carousel-slide__inner-content')}>
                <video
                  className={cn('inner-content__gallery-item')}
                  width="auto"
                  height="218"
                  poster={mediaItem.thumbnail}
                  title={`Video thumbnail from ${mediaItem.academy} academy`}
                >
                  <source
                    src={mediaItem.src}
                    type={'video/' + mediaItem.src.split('.').pop()}
                  />
                  <p>
                    Your browser doesn&quot;t support HTML video. Here is a{' '}
                    <a href={mediaItem.src}>link to the video</a> instead.
                  </p>
                </video>
                <div className={cn('video-controls')}>
                  <button type="button" className={cn('play-button')}>
                    <Icon_play className={cn('play-button__icon')} />
                  </button>
                </div>
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

GalleryMediaCarousel.propTypes = {
  mediaData: PropTypes.array.isRequired,
  selectedMediaItem: PropTypes.number,
};
export default GalleryMediaCarousel;
