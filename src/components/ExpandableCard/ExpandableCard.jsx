import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Icon_arrow_down from '/src/assets/icons/Icon_arrow_down.svg';
import Icon_arrow_up from '/src/assets/icons/Icon_arrow_up.svg';
import Icon_person from '/src/assets/icons/Icon_person.svg';
import Icon_clock from '/src/assets/icons/Icon_clock.svg';
import DateItem from '../DateItem/DateItem';
import styles from './ExpandableCard.module.scss';

const cn = classNames.bind(styles);

const ExpandableCard = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const date = new Date(2022, 9, 9);
  const date2 = new Date(2023, 9, 10);

  return (
    <div
      className={cn('expandable-card')}
      onClick={() => setIsExpanded((prevState) => !prevState)}
    >
      <div className={cn('expandable-card__header')}>
        <div className={cn('expandable-card__title')}>
          <h4 className={cn('title')}>{title}</h4>

          <button className={cn('button')}>
            {isExpanded ? (
              <Icon_arrow_up className={cn('button-icon')} />
            ) : (
              <Icon_arrow_down className={cn('button-icon')} />
            )}
          </button>
        </div>

        {isExpanded && (
          <div className={cn('expandable-card__title--expanded')}>
            <div className={cn('lectors')}>
              <Icon_person className={cn('title--expanded__icon')} />
              Audrius Navickas
            </div>
            <div className={cn('time')}>
              <Icon_clock className={cn('title--expanded__icon')} />
              <span className={cn('hour')}>4:00 pm</span>
              <span className={cn('duration')}>3 hours</span>
            </div>
          </div>
        )}
      </div>

      {isExpanded && (
        <div className={cn('expandable-card__body')}>
          <DateItem
            startDate={date}
            text={'Vilnius'}
            showLocationIcon
            doubleDate={false}
          />

          <DateItem
            startDate={date2}
            text={'Kaunas'}
            showLocationIcon
            doubleDate={false}
          />
        </div>
      )}
    </div>
  );
};

ExpandableCard.propTypes = {
  title: PropTypes.string.isRequired,
  // children: PropTypes.node,
};

export default ExpandableCard;
