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

  const dataMap = data.reduce((acc, obj) => {
    const year = obj.schedule[0].startDate.getFullYear();
    const month = obj.schedule[0].startDate.getMonth();

    if (!acc.has(year)) {
      acc.set(year, new Map());
    }

    if (!acc.get(year).has(month)) {
      acc.get(year).set(month, []);
    }

    acc.get(year).get(month).push(obj);

    return acc;
  }, new Map());

  return (
    <>
      {data && (
        <section className={cn('schedule-section')}>
          <h2 className={cn('schedule-section__heading')}>Schedule</h2>

          <div className={cn('schedule-section__lectures-wrapper')}>
            {Array.from(dataMap.keys()).map((year) =>
              Array.from(dataMap.get(year).keys()).map((month) => (
                <div className={cn('month')} key={month}>
                  <h3 className={cn('schedule-section__sub-heading')}>
                    {new Date(2022, month, 1).toLocaleDateString('default', {
                      month: 'long',
                    })}
                  </h3>
                  {dataMap
                    .get(year)
                    .get(month)
                    .map((lecture) => (
                      <ExpandableCard lecture={lecture} key={lecture.id} />
                    ))}
                </div>
              ))
            )}
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
      )}
    </>
  );
};

ScheduleSection.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default ScheduleSection;
