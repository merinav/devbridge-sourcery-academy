import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Date_Item.module.scss';

const cn = classNames.bind(styles);
//className={cn('date-item__date--month')}

const Date_Item = ({ month, day, text }) => {
  // var dateMonth = month;
  // if (month.length > 1) {
  //     dateMonth = month.join('   ');
  // }
  return (
    <div className={cn('date-item')}>
      <div className={cn('date-item__date')}>
        <div className={cn('date-item__date--month')}>{month}</div>
        <div className={cn('date-item__date--day')}>{day}</div>
      </div>
      <div className={cn('date-item__text')}>{text}</div>
    </div>
  );
};

Date_Item.propTypes = {
  month: PropTypes.string,
  day: PropTypes.string,
  text: PropTypes.string,
};
//PropTypes.arrayOf(PropTypes.string),

export default Date_Item;
