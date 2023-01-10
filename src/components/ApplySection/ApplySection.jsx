import React from 'react';
import classNames from 'classnames/bind';
import PromoSection from '~/components/PromoSection';
import applySectionData from '~/components/ApplySection/applySectionData';
import PropTypes from 'prop-types';
import { ACADEMIES } from '~/constants/constants';
import styles from './ApplySection.module.scss';

const cn = classNames.bind(styles);

const ApplySection = ({ academy }) => {
  const dataApplicableToAllSections = {
    headingData: 'Apply to academy',
    buttonText: 'Apply now',
    isApplyPromo: true,
  };

  return (
    <PromoSection
      data={{ ...dataApplicableToAllSections, ...applySectionData[academy] }}
    >
      <figure className={cn('apply__img')}>
        <img src={applySectionData[academy].imagePath} alt="" />
      </figure>
    </PromoSection>
  );
};

ApplySection.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};
export default ApplySection;
