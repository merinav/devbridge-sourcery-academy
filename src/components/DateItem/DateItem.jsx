import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Icon_location_on from '../../assets/icons/Icon_location_on.svg';
import returnDate from '../../utils/dateUtils';
import styles from './DateItem.module.scss';

const cn = classNames.bind(styles);

const DateItem = ({ date1, date2, showLocationIcon, text }) => {
  const data = returnDate(date1, date2);

  return (
    <div className={cn('date-item')}>
      <div className={cn('date-item__date')}>
        <div className={cn('date-container')}>
          <div className={cn('date-container__item')}>
            <div> {data.hasSecondDate ? data.month1 : ''}</div>
            <div> {data.hasSecondDate ? '   ' : data.month1}</div>
            <div>{data.hasSecondDate ? data.month2 : ''} </div>
          </div>
          <div className={cn('date-container__item')}>
            <div className={cn('date-container__day')}>
              {data.hasSecondDate ? data.day1 : ''}
            </div>
            <div className={cn('date-container__day')}>
              {data.hasSecondDate ? ' - ' : data.day1}
            </div>
            <div className={cn('date-container__day')}>
              {data.hasSecondDate ? data.day2 : ''}{' '}
            </div>
          </div>
        </div>
      </div>
      <div className={cn('date-item__text')}>
        {showLocationIcon && (
          <div className={cn('date-item__text--icon')}>
            <Icon_location_on />
          </div>
        )}
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
