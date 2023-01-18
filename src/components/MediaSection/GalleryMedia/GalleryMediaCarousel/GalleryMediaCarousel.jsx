import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, EffectFade } from 'swiper';
import { useReducedMotion } from 'framer-motion';
import SliderNavigationButton from './SliderNavigationButton/SliderNavigationButton';
import Icon_play from '/src/assets/icons/Icon_play.svg';
import Icon_SliderClose from '~/assets/icons/Icon_close_modal_x.svg';
import styles from './GalleryMediaCarousel.module.scss';
import SliderPagination from './SliderPagination';

const cn = classNames.bind(styles);

const GalleryMediaCarousel = ({
  mediaData,
  selectedMediaItem,
  closeModalHandler,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const MEDIA_ITEMS_TO_SHOW = mediaData.length > 30 ? 30 : mediaData.length;

  return (
    <div className={cn('carousel')}>
      <div className={cn('carousel__navigation-wrapper')}>
        <SliderNavigationButton direction={'previous'} ref={prevRef} />
        <SliderNavigationButton direction={'next'} ref={nextRef} />
        <button
          className={cn('navigation-wrapper__close-button')}
          onClick={closeModalHandler}
          tabIndex="0"
        >
          <Icon_SliderClose className={cn('close-button__icon')} alt="close" />
        </button>
        <SliderPagination
          itemsShown={MEDIA_ITEMS_TO_SHOW}
          shownItemIndex={currentSlideIndex}
        />
      </div>

      <div className={cn('carousel__swiper-wrapper')}>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          modules={[Navigation, Keyboard, EffectFade]}
          autoHeight={true}
          loop={true}
          initialSlide={selectedMediaItem}
          navigation={{
            prevEl: prevRef.current ? prevRef.current : null,
            nextEl: nextRef.current ? nextRef.current : null,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          keyboard={{ enabled: true }}
          a11y={true}
          onSlideChange={(swiper) => setCurrentSlideIndex(swiper.realIndex + 1)}
          speed={prefersReducedMotion ? 0 : 200}
          // onSwiper={(swiper) => }
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
    </div>
  );
};

GalleryMediaCarousel.propTypes = {
  mediaData: PropTypes.array.isRequired,
  selectedMediaItem: PropTypes.number,
  closeModalHandler: PropTypes.func.isRequired,
};
export default GalleryMediaCarousel;
