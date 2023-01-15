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
  // console.log(data);

  const dataSortedByMonth = [...data];
  dataSortedByMonth.sort(function (a, b) {
    let monthA = new Date(a.schedule[0].startDate).getMonth();
    let monthB = new Date(b.schedule[0].startDate).getMonth();
    return monthA - monthB;
  });
  // console.log(dataSortedByMonth);
  // console.log({ dataSortedByMonth });

  const monthsInNumbers = [];
  dataSortedByMonth.forEach((item) => {
    if (!monthsInNumbers.includes(item.schedule[0].startDate.getMonth()))
      monthsInNumbers.push(item.schedule[0].startDate.getMonth());
  });
  // console.log(monthsInNumbers);

  const monthsInWords = monthsInNumbers.map((month) =>
    new Date(2022, month, 1).toLocaleDateString('default', { month: 'long' })
  );
  // console.log(monthsInWords);

  const sortedData = {};
  dataSortedByMonth.forEach((item) => {
    const month = item.schedule[0].startDate.getMonth();
    if (!sortedData[month]) {
      sortedData[month] = [];
    }
    sortedData[month].push(item);
  });
  // console.log(sortedData);
  console.log({ sortedData });

  return (
    <>
      <section className={cn('schedule-section')}>
        <h2 className={cn('schedule-section__heading')}>Schedule</h2>

        <div className={cn('schedule-section__months-wrapper')}>
          <h3 className={cn('schedule-section__sub-heading')}>Months</h3>
          <h3 className={cn('schedule-section__sub-heading')}>Months</h3>
        </div>

        <div className={cn('schedule-section__lectures-wrapper')}>
          {Object.keys(sortedData).map((month) => (
            <div className={cn('month')} key={month}>
              {/* {month} */}
              {sortedData[month].map((lecture) => (
                <ExpandableCard lecture={lecture} key={lecture.id} />
              ))}
            </div>
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
