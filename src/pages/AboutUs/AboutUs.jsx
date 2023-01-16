import React from 'react';
import useTheme from '~/hooks/useTheme';
import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';
import VideoCard from '~/components/AcademiesPromoSection/VideoCard';

const cn = classNames.bind(styles);

function AboutUs() {
  useTheme('purple');

  return (
    <>
      <section className={cn('promo-section')}>
        <div className={cn('promo-section__text')}>
          <h2 className={cn('promo-section__heading')}>Aidas</h2>
          <p className={cn('promo-section__paragraph')}>
            <strong>In my time off I like to:</strong> play drums, check average
            mass of a dumpling in a pack, learn chess, record DJ sets.
          </p>
          <p className={cn('promo-section__paragraph')}>
            <strong>
              I was stepping out of my comfort zone the most during the project
              when:
            </strong>{' '}
            I had to implement custom designs and fit within strict project
            rules and setup.
          </p>
          <p className={cn('promo-section__paragraph')}>
            <strong>
              My favorite / most used emojis during the academy were:
            </strong>
          </p>
        </div>
        <VideoCard
          imagePath="/assets/images/Image_Aidas.jpg"
          showPlayButton={false}
        />
      </section>

      <section className={cn('promo-section')}>
        <VideoCard
          imagePath="/assets/images/Image_Aiste.png"
          showPlayButton={false}
        />
        <div className={cn('promo-section__text')}>
          <h2 className={cn('promo-section__heading')}>Aistė</h2>
          <p className={cn('promo-section__paragraph')}>
            <strong>In my time off I like to:</strong> do leg presses, shoulder
            presses, lat pulldowns, squats, deadlifts, pet dogs and make perfect
            pannacotta dessert.
          </p>
          <p className={cn('promo-section__paragraph')}>
            <strong>
              I was stepping out of my comfort zone the most during the project
              when:
            </strong>{' '}
            giving my ideas and opinions even if I feel I could be wrong.
          </p>
          <p className={cn('promo-section__paragraph')}>
            <strong>
              My favorite / most used emojis during the academy were:
            </strong>
          </p>
        </div>
      </section>

      <section className={cn('promo-section')}>
        <VideoCard
          imagePath="/assets/images/Image_Albertas.jpg"
          showPlayButton={false}
        />
        <div className={cn('promo-section__text')}>
          <h2 className={cn('promo-section__heading')}>Albertas</h2>
          <p className={cn('promo-section__paragraph')}>
            <strong>In my time off I like to:</strong> walk outside, in the
            fresh air, in the park or in the forest. Favorite hobby is fishing
            for predatory fish with spinning.
          </p>
          <p className={cn('promo-section__paragraph')}>
            <strong>
              I was stepping out of my comfort zone the most during the project
              when:
            </strong>{' '}
            you don&#39;t know or understand something, but you take it and
            learn and create. I&#39;m also glad that I managed to combine work
            with the academy.
          </p>
          <p className={cn('promo-section__paragraph')}>
            <strong>
              My favorite / most used emojis during the academy were:
            </strong>
          </p>
        </div>
      </section>

      <section className={cn('promo-section')}>
        <div className={cn('promo-section__text')}>
          <h2 className={cn('promo-section__heading')}>Meri</h2>

          <p className={cn('promo-section__paragraph')}>
            <strong>In my time off I like to:</strong> lift heavy things.
          </p>
          <p className={cn('promo-section__paragraph')}>
            <strong>
              I was stepping out of my comfort zone the most during the project
              when:
            </strong>{' '}
            I was feeling stupid or overwhelmed and realizing this is just a
            part of the process.
          </p>
          <p className={cn('promo-section__paragraph')}>
            <strong>
              My favorite / most used emojis during the academy were:
            </strong>
          </p>
        </div>
        <VideoCard
          imagePath="/assets/images/Image_Meri.jpg"
          showPlayButton={false}
        />
      </section>
    </>
  );
}

export default AboutUs;
