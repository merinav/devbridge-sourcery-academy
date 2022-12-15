import React from 'react';
import classNames from 'classnames/bind';
import PromoSection from '/src/components/PromoSection';
import Image_Promo from '~/assets/images/Image_Promo.svg';
import styles from './PromoHome.module';

const cn = classNames.bind(styles);

const promoHomeData = {
  headingData: `Sourcery 
  Academy`,
  paragraphData: `Sourcery academy is our free of charge education program created to
  allow students to improve their skills and prepare for a career in
  the IT industry. There are three academies available. They serve as
  our long- term commitment to increase the number of students in
  Lithuania entering information technologies studies.`,
  buttonText: 'View academies',
  buttonProps: { href: '#academies-section' },
  isApplyPromo: false,
};

const PromoHome = () => {
  return (
    <PromoSection data={promoHomeData}>
      <figure className={cn('promo-home__img')}>
        <Image_Promo aria-hidden="true" />
      </figure>
    </PromoSection>
  );
};

export default PromoHome;
