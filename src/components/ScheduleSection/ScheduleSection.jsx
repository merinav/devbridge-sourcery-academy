import React, { useMemo } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import ParticlesScheduleTop from '../../assets/images/Background_particles_Schedule_top.svg';
import ParticlesScheduleBottom from '../../assets/images/Background_particles_Schedule_bottom.svg';
import PathSchedule from '../../assets/images/Path_Schedule.svg';
import { ACADEMIES } from '/src/constants/constants.js';
import { scheduleSectionsData } from './scheduleSectionsData';
import ExpandableCard from './ExpandableCard/ExpandableCard';
import styles from './ScheduleSection.module';

const cn = classNames.bind(styles);

const ScheduleSection = ({ academy }) => {
  const data = useMemo(() => {
    switch (academy) {
      case ACADEMIES.developers:
        return scheduleSectionsData.developers.lectures;
      case ACADEMIES.testers:
        return scheduleSectionsData.testers.lectures;
      case ACADEMIES.frontend:
        return scheduleSectionsData.frontend.lectures;
      default:
        return null;
    }
  }, [scheduleSectionsData]);

  return (
    <>
      <section className={cn('schedule-section')}>
        <h2 className={cn('schedule-section__heading')}>Schedule</h2>

        <div className={cn('schedule-section__months-wrapper')}>
          <h3 className={cn('schedule-section__sub-heading')}>Months</h3>
          <h3 className={cn('schedule-section__sub-heading')}>Months</h3>
        </div>

        <div className={cn('schedule-section__lectures-wrapper')}>
          {data &&
            data.map((lecture) => (
              <ExpandableCard lecture={lecture} key={lecture.id} />
            ))}
        </div>

        <PathSchedule
          className={cn('schedule-section__path')}
          aria-hidden="true"
        />

        <ParticlesScheduleTop
          className={cn('schedule-section__particles-top')}
          aria-hidden="true"
        />

        <ParticlesScheduleBottom
          className={cn('schedule-section__particles-bottom')}
          aria-hidden="true"
        />
      </section>
    </>
  );
};

ScheduleSection.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default ScheduleSection;
