import React, { useMemo } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import ParticlesScheduleTop from '../../assets/images/Background_particles_Schedule_top.svg';
import ParticlesScheduleBottom from '../../assets/images/Background_particles_Schedule_bottom.svg';
import PathSchedule from '../../assets/images/Path_Schedule.svg';
import { ACADEMIES } from '/src/constants/constants.js';
import { scheduleSectionsData } from './scheduleSectionsData';
import ExpandableCard from './ExpandableCard/ExpandableCard';
import Filter from './../Filter/Filter';
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
  console.log(data); // TODO remove after testing

  const dataMap = data.reduce((acc, obj) => {
    // Extract the year and month from the startDate property
    const year = obj.schedule[0].startDate.getFullYear();
    const month = obj.schedule[0].startDate.getMonth();

    // Check if the year key already exists in the Map
    if (!acc.has(year)) {
      // If not, create a new Map for the year
      acc.set(year, new Map());
    }

    // Check if the month key already exists in the year Map
    if (!acc.get(year).has(month)) {
      // If not, create a new Map for the month
      acc.get(year).set(month, []);
    }

    // Push the object into the month Map
    acc.get(year).get(month).push(obj);

    return acc;
  }, new Map());
  console.log(dataMap); // TODO remove after testing

  const allMonthsNumbers = [].concat(
    ...Array.from(dataMap.entries()).map(([year, yearMap]) =>
      Array.from(yearMap.keys())
    )
  );
  console.log(allMonthsNumbers); // TODO remove after testing

  const allMonthNames = allMonthsNumbers.map((month) =>
    new Date(2023, month, 1).toLocaleDateString('default', { month: 'long' })
  );
  console.log(allMonthNames); // TODO remove after testing

  // const middle = Math.ceil(allMonthNames.length / 2);
  // let monthWrapper1 = allMonthNames.slice(0, middle).join(' / ');
  // let monthWrapper2 = allMonthNames.slice(middle).join(' / ');
  // if (allMonthNames.length % 2 !== 0) {
  //   let lastMonth = monthWrapper1
  //     .substring(monthWrapper1.lastIndexOf('/') + 1)
  //     .substring(1);
  //   monthWrapper2 = lastMonth + ' / ' + monthWrapper2;
  // }
  // // console.log(middle); // TODO remove after testing
  // console.log(monthWrapper1); // TODO remove after testing
  // console.log(monthWrapper2); // TODO remove after testing

  return (
    <>
      {data && (
        <section className={cn('schedule-section')}>
          <h2 className={cn('schedule-section__heading')}>Schedule</h2>

          {/* <div className={cn('schedule-section__months-wrapper')}>
            <h3 className={cn('schedule-section__sub-heading')}>
              {monthWrapper1}
            </h3>
            <h3 className={cn('schedule-section__sub-heading')}>
              {monthWrapper2}
            </h3>
          </div> */}

          {/* <div className={cn('schedule-section__lectures-wrapper')}>
            {Array.from(dataMap.keys()).map((year) =>
              Array.from(dataMap.get(year).keys()).map((month) => (
                <div className={cn('month')} key={month}>
                  {dataMap
                    .get(year)
                    .get(month)
                    .map((lecture) => (
                      <ExpandableCard lecture={lecture} key={lecture.id} />
                    ))}
                </div>
              ))
            )}
          </div> */}

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

          {/* <Filter data={allMonthNames} /> */}

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
