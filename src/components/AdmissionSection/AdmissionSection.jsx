import React, { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import ParticlesAdmission from '/src/assets/images/Background_particles_Admission.svg';
import PathAdmission from '/src/assets/images/Path_Admission.svg';
import { ACADEMIES } from '/src/constants/constants.js';
import { admissionData } from './admissionData';
import styles from './AdmissionSection.module';

const cn = classNames.bind(styles);

console.log(ACADEMIES);
console.log(admissionData);

const AdmissionSection = () => {
  return (
    <section className={cn('admission-section')} id="admission-section">
      <div className={cn('admission-section__text-wrapper')}>
        <h2 className={cn('admission-section__heading')}>The Admission</h2>
        <h3>Introduction</h3>
        <p>
          During your first lecture we will introduce the Sourcery academy, tell
          you more about what we do as developers, get to know your fellow team
          members, lecturers and mentors.
        </p>
        <h3>You will learn:</h3>
        <ul>
          <li>React</li>
          <li>JPA</li>
          <li>Spring Boot</li>
        </ul>
        <h3>An interview</h3>
        <p>
          Only the top candidates after the final exam are invited to a job
          interview which will challenge your technical skills and English
          knowledge.
        </p>
      </div>
      <div className={cn('admission-section__calendar-wrapper')}>
        <h3>Dates</h3>

        <div>date1</div>
        <div>date2</div>
        <div>date3</div>

        <PathAdmission />

        <ParticlesAdmission
          className={cn('admission-section__particles')}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

// AdmissionSection.propTypes = {
//   prop: PropTypes.string.isRequired,
// };

export default AdmissionSection;
