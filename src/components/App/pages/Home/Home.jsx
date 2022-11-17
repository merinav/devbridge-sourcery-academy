import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module';
import Image_Promo from '~/assets/images/Image_Promo.svg';

const cn = classNames.bind(styles);

const Home = () => {
  return (
    //<section className={cn('section')}>
    <div className={cn('wrapper')}>
      <section>
        <h1 className={cn('heading')}>
          Sourcery<br></br>
          Academy
        </h1>
        <p className={cn('text')}>
          Sourcery academy is our free of charge education<br></br>
          program created to allow students to improve their<br></br>
          skills and prepare for a career in the IT industry. There<br></br>
          are three academies available. They serve as our long-<br></br>
          term commitment to increase the number of students<br></br>
          in Lithuania entering information technologies studies.
        </p>
        <p>BUTTON WILL BE HERE</p>
      </section>

      <aside>
        <figure className={cn('image')}>
          <Image_Promo />
        </figure>
      </aside>
      {/* //</section> */}
    </div>
  );
};

export default Home;
