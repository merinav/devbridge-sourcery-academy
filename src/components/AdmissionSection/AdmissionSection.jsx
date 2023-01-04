import React, { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import ParticlesAdmission from '/src/assets/images/Background_particles_Admission.svg';
import PathAdmission from '/src/assets/images/Path_Admission.svg';
import ImageAdmission from '/src/assets/images/Image_Admission.svg';
import { ACADEMIES } from '/src/constants/constants.js';
import { admissionData } from './admissionData';
import DateItem from '../DateItem/DateItem';
import styles from './AdmissionSection.module';

const cn = classNames.bind(styles);

const AdmissionSection = ({ academy }) => {
  const data = useMemo(() => {
    switch (academy) {
      case ACADEMIES.developers:
        return admissionData.developers;
      case ACADEMIES.testers:
        return admissionData.testers;
      case ACADEMIES.frontend:
        return admissionData.frontend;
      default:
        return admissionData;
    }
  }, [admissionData]);

  return (
    <section className={cn('admission-section')}>
      <div className={cn('admission-section__text-wrapper')}>
        <h2 className={cn('admission-section__heading')}>The Admission</h2>
        <h3 className={cn('admission-section__sub-heading')}>
          {data.introductionTitle}
        </h3>
        <p className={cn('admission-section__text')}>{data.introduction}</p>
        <h3 className={cn('admission-section__sub-heading')}>
          {data.learnTitle}
        </h3>
        <ul className={cn('admission-section__list')}>
          {data.learn.map((item, index) => (
            <li className={cn('admission-section__list-text')} key={index}>
              {item}
            </li>
          ))}
        </ul>
        <h3 className={cn('admission-section__sub-heading')}>
          {data.interviewTitle}
        </h3>
        <p className={cn('admission-section__text')}>{data.interview}</p>
      </div>

      <div className={cn('admission-section__calendar-wrapper')}>
        <h3 className={cn('admission-section__sub-heading')}>Dates</h3>

        <div className={cn('admission-section__dates-wrapper')}>
          <DateItem
            startDate={data.date1.startDate}
            endDate={data.date1?.endDate}
            text={data.date1.text}
            doubleDate={data.date1.doubleDate}
          />
          <DateItem
            startDate={data.date2.startDate}
            endDate={data.date2?.endDate}
            text={data.date2.text}
            doubleDate={data.date2.doubleDate}
          />
          <DateItem
            startDate={data.date3.startDate}
            endDate={data.date3?.endDate}
            text={data.date3.text}
            doubleDate={data.date3.doubleDate}
          />

          <PathAdmission className={cn('admission-section__path')} />
        </div>

        <ParticlesAdmission
          className={cn('admission-section__particles')}
          aria-hidden="true"
        />

        <figure className={cn('admission-section__image')}>
          <ImageAdmission alt="" />
        </figure>
      </div>
    </section>
  );
};

AdmissionSection.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default AdmissionSection;
