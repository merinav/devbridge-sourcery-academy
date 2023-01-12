import React, { useState, useMemo } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Icon_arrow_down from '/src/assets/icons/Icon_arrow_down.svg';
import Icon_arrow_up from '/src/assets/icons/Icon_arrow_up.svg';
import Icon_person from '/src/assets/icons/Icon_person.svg';
import Icon_clock from '/src/assets/icons/Icon_clock.svg';
import { ACADEMIES } from '/src/constants/constants.js';
import { scheduleSectionsData } from './scheduleSectionsData';
import DateItem from '../DateItem/DateItem';
import styles from './ExpandableCard.module.scss';

const cn = classNames.bind(styles);

const ExpandableCard = ({ lecture, isExpanded, handleExpand }) => {
  const vilnius = lecture.schedule.find((city) => city.location === 'Vilnius');
  const kaunas = lecture.schedule.find((city) => city.location === 'Kaunas');
  const isDoubleDate = lecture.schedule.some((item) => 'endDate' in item);

  return (
    <>
      <div className={cn('expandable-card')} onClick={handleExpand}>
        <div className={cn('expandable-card__header')}>
          <div className={cn('expandable-card__title')}>
            <h4 className={cn('title')}>{lecture.title}</h4>

            <button className={cn('button')}>
              {isExpanded ? (
                <Icon_arrow_up
                  className={cn('button-icon')}
                  aria-hidden="true"
                />
              ) : (
                <Icon_arrow_down
                  className={cn('button-icon')}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>

          {isExpanded && (
            <div className={cn('expandable-card__title--expanded')}>
              {lecture.lecturer && (
                <div className={cn('lectors')}>
                  <Icon_person
                    className={cn('title--expanded__icon')}
                    aria-hidden="true"
                  />
                  {lecture.lecturer}
                </div>
              )}

              <div className={cn('time')}>
                <Icon_clock
                  className={cn('title--expanded__icon')}
                  aria-hidden="true"
                />

                {lecture.time && (
                  <span className={cn('hour')}>{lecture.time}</span>
                )}

                {lecture.duration && (
                  <span className={cn('duration')}>
                    {lecture.duration > 1
                      ? `${lecture.duration} hours`
                      : `${lecture.duration} hour`}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {isExpanded && (
          <div className={cn('expandable-card__body')}>
            <DateItem
              startDate={vilnius.startDate}
              text={vilnius.location}
              showLocationIcon
              doubleDate={isDoubleDate}
            />

            <DateItem
              startDate={kaunas.startDate}
              text={kaunas.location}
              showLocationIcon
              doubleDate={isDoubleDate}
            />
          </div>
        )}
      </div>
    </>
  );
};

const AllExpandableCards = ({ academy }) => {
  const data = useMemo(() => {
    switch (academy) {
      case ACADEMIES.developers:
        return scheduleSectionsData.developers.lectures;
      case ACADEMIES.testers:
        return scheduleSectionsData.testers.lectures;
      case ACADEMIES.frontend:
        return scheduleSectionsData.frontend.lectures;
      default:
        return scheduleSectionsData;
    }
  }, [scheduleSectionsData]);

  const [expandedCardIds, setExpandedCardIds] = useState([]);

  const handleCardExpand = (lectureId) => {
    if (expandedCardIds.includes(lectureId)) {
      setExpandedCardIds(
        expandedCardIds.filter((currentId) => currentId !== lectureId)
      );
    } else {
      setExpandedCardIds([...expandedCardIds, lectureId]);
    }
  };

  return (
    <>
      {data.map((lecture) => (
        <ExpandableCard
          key={lecture.id}
          lecture={lecture}
          isExpanded={expandedCardIds.includes(lecture.id)}
          handleExpand={() => handleCardExpand(lecture.id)}
        />
      ))}
    </>
  );
};

ExpandableCard.propTypes = {
  lecture: PropTypes.object,
  isExpanded: PropTypes.bool,
  handleExpand: PropTypes.func,
};

AllExpandableCards.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default AllExpandableCards;
