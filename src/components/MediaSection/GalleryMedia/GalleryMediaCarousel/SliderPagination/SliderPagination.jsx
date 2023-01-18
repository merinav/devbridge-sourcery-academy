import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SliderPagination.module.scss';

const cn = classNames.bind(styles);

const SliderPagination = ({ itemsShown, shownItemIndex }) => {
  return (
    <div
      className={cn('slider-pagination')}
    >{`${shownItemIndex} / ${itemsShown}`}</div>
  );
};

SliderPagination.propTypes = {
  itemsShown: PropTypes.number.isRequired,
  shownItemIndex: PropTypes.number.isRequired,
};

export default SliderPagination;
