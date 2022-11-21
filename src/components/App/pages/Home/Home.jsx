import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module';
import Image_Promo from '~/assets/images/Image_Promo.svg';

const cn = classNames.bind(styles);

const Home = () => {
  return (
    <article className={cn('container')}>
      <section className={cn('content-text')}>
        <h1 className={cn('content-text__heading')}>
          Sourcery <br></br>
          Academy
        </h1>
        <p className={cn('content-text__text')}>
          Sourcery academy is our free of charge education program created to
          allow students to improve their skills and prepare for a career in the
          IT industry. There are three academies available. They serve as our
          long- term commitment to increase the number of students in Lithuania
          entering information technologies studies.
        </p>
        <p className={cn('content-text__button')}>BUTTON WILL BE HERE</p>
      </section>

      <aside className={cn('content-image')}>
        <figure className={cn('content-image__image')}>
          <Image_Promo />
        </figure>
      </aside>
    </article>
  );
};

export default Home;
