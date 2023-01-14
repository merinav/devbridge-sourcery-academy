import React from 'react';
import classNames from 'classnames/bind';
import PromoSection from '~/components/PromoSection';
import academiesPromoSectionData from '~/components/AcademiesPromoSection/academiesPromoData';
import PropTypes from 'prop-types';
import { ACADEMIES } from '~/constants/constants';
import styles from './AcademiesPromoSection.module.scss';
import VideoCard from '~/components/AcademiesPromoSection/VideoCard';

const cn = classNames.bind(styles);

const AcademiesPromoSection = ({ academy }) => {
  const dataApplicableToAllSections = {
    buttonText: 'Register',
    isApplyPromo: false,
  };

  return (
    <section className={cn('academies-promo-section')}>
      <PromoSection
        data={{
          ...dataApplicableToAllSections,
          ...academiesPromoSectionData[academy],
        }}
      >
        <VideoCard imagePath={academiesPromoSectionData[academy].imagePath} />
      </PromoSection>
    </section>
  );
};

AcademiesPromoSection.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default AcademiesPromoSection;
