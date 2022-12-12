import React from 'react';
import classNames from 'classnames/bind';
import Image_Promo from '../../../assets/images/Image_Promo.svg';
import Button from '../../../components/Button/Button';
import styles from './PromoSection.module';

const cn = classNames.bind(styles);

const PromoSection = () => {
  return (
    <section className={cn('promo-section')}>
      <div className={cn('section-text')}>
        <h1 className={cn('section-text__heading')}>
          Sourcery <br />
          Academy
        </h1>
        <p className={cn('section-text__text')}>
          Sourcery academy is our free of charge education program created to
          allow students to improve their skills and prepare for a career in the
          IT industry. There are three academies available. They serve as our
          long- term commitment to increase the number of students in Lithuania
          entering information technologies studies.
        </p>
        <Button>View academies</Button>
        <Button href={'https://www.google.lt/'}>href prop</Button>
        <Button to={'/academy/front-end'}>to prop</Button>
        <Button type={'submit'}>type prop</Button>
        <Button onClick={() => console.log('button with onClick prop')}>
          onClick prop
        </Button>
        <Button ariaLabel={'button accessible name'}>ariaLabel prop</Button>
      </div>
      <figure className={cn('section-image')}>
        <Image_Promo alt="Person standing near huge laptop" />
      </figure>
    </section>
  );
};
export default PromoSection;
