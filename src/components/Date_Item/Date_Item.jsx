import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Icon_location_on from '../../assets/icons/Icon_location_on.svg';
import styles from './Date_Item.module.scss';

const cn = classNames.bind(styles);

const Date_Item = ({ date1, date2, showLocationIcon, text }) => {
  const monthName =
    date1 && !date2 ? date1.toLocaleString('en-GB', { month: 'short' }) : '';
  const dayNumber = date1 && !date2 ? date1.getDate() : '-';

  const monthName1 =
    date1 && date2 ? date1.toLocaleString('en-GB', { month: 'short' }) : '';
  const monthName2 =
    date1 && date2 ? date2.toLocaleString('en-GB', { month: 'short' }) : '';

  const dayNumber1 = date1 && date2 ? date1.getDate() : '';
  const dayNumber2 = date1 && date2 ? date2.getDate() : '';

  return (
    <div className={cn('date-item')}>
      <div className={cn('date-item__date')}>
        <div className={cn('date-block')}>
          <div className={cn('date-block__item')}>{monthName1}</div>
          <div className={cn('date-block__item', 'date-block__day')}>
            {dayNumber1}
          </div>
        </div>
        <div className={cn('date-block')}>
          <div className={cn('date-block__item')}>{monthName}</div>
          <div className={cn('date-block__item', 'date-block__day')}>
            {dayNumber}
          </div>
        </div>
        <div className={cn('date-block')}>
          <div className={cn('date-block__item')}>{monthName2}</div>
          <div className={cn('date-block__item', 'date-block__day')}>
            {dayNumber2}
          </div>
        </div>
      </div>
      <div className={cn('date-item__text')}>
        <div className={cn({ icon: showLocationIcon })}>
          {showLocationIcon ? <Icon_location_on /> : ''}
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
};

Date_Item.propTypes = {
  date1: PropTypes.instanceOf(Date).isRequired,
  date2: PropTypes.instanceOf(Date),
  showLocationIcon: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default Date_Item;
