import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Icon_location_on from '../../assets/icons/Icon_location_on.svg';
import styles from './Date_Item.module.scss';

const cn = classNames.bind(styles);

const Date_Item = ({ itemSize, month, day, text }) => {
  const size = itemSize === 'small' ? true : false;

  const month1 = month.length > 1 ? month[0] : '';
  const month2 = month.length == 1 ? month[0] : '';
  const month3 = month.length > 1 ? month[1] : '';

  const day1 = day.length > 1 ? day[0] : '';
  const day2 = day.length == 1 ? day[0] : '-';
  const day3 = day.length > 1 ? day[1] : '';

  return (
    <div className={cn('date-item', { 'date-item--small': size })}>
      <div
        className={cn('date-item__date', { 'date-item__date--small': size })}
      >
        <div className={cn('date-block')}></div>
        <div className={cn('date-block')}>
          <div className={cn('date-block__item')}>{month1}</div>
          <div className={cn('date-block__item', 'date-block__day')}>
            {day1}
          </div>
        </div>
        <div className={cn('date-block')}>
          <div className={cn('date-block__item')}>{month2}</div>
          <div className={cn('date-block__item', 'date-block__day')}>
            {day2}
          </div>
        </div>
        <div className={cn('date-block')}>
          <div className={cn('date-block__item')}>{month3}</div>
          <div className={cn('date-block__item', 'date-block__day')}>
            {day3}
          </div>
        </div>
        <div className={cn('date-block')}></div>
      </div>
      <div
        className={cn('date-item__text', { 'date-item__text--small': size })}
      >
        <div className={cn({ icon: size })}>
          {size ? <Icon_location_on /> : ''}
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
};

Date_Item.propTypes = {
  month: PropTypes.arrayOf(PropTypes.string).isRequired,
  day: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  itemSize: PropTypes.oneOf(['small', 'big']).isRequired,
};

export default Date_Item;
