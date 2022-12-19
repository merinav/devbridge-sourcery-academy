import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Icon_location_on from '../../assets/icons/Icon_location_on.svg';
import styles from './DateItem.module.scss';

const cn = classNames.bind(styles);

const DateItem = ({ date1, date2, showLocationIcon, text }) => {
  const oneDate = date1 && !date2 ? true : false;
  const twoDates = date1 && date2 ? true : false;

  const month = oneDate
    ? date1.toLocaleString('en-GB', { month: 'short' })
    : '';
  const day = oneDate ? date1.getDate() : '-';

  const month1 = twoDates
    ? date1.toLocaleString('en-GB', { month: 'short' })
    : '';
  const day1 = twoDates ? date1.getDate() : '';

  const month2 = twoDates
    ? date2.toLocaleString('en-GB', { month: 'short' })
    : '';
  const day2 = twoDates ? date2.getDate() : '';

  return (
    <div className={cn('date-item')}>
      <div className={cn('date-item__date')}>
        <div className={cn('date-container')}>
          <div className={cn('date-container__item')}>{month1}</div>
          <div className={cn('date-container__item', 'date-container__day')}>
            {day1}
          </div>
        </div>
        <div className={cn('date-container')}>
          <div className={cn('date-container__item')}>{month}</div>
          <div className={cn('date-container__item', 'date-container__day')}>
            {day}
          </div>
        </div>
        <div className={cn('date-container')}>
          <div className={cn('date-container__item')}>{month2}</div>
          <div className={cn('date-container__item', 'date-container__day')}>
            {day2}
          </div>
        </div>
      </div>
      <div className={cn('date-item__text')}>
        <div className={cn({ 'date-item__text--icon': showLocationIcon })}>
          {showLocationIcon ? <Icon_location_on /> : ''}
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
};

DateItem.propTypes = {
  date1: PropTypes.instanceOf(Date).isRequired,
  date2: PropTypes.instanceOf(Date),
  showLocationIcon: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default DateItem;
