import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Filter.module';

const cn = classNames.bind(styles);

const Filter = () => {
  return <div className={cn('filter')}>Filter component</div>;
};

Filter.propTypes = {
  // prop: PropTypes.string,
};

export default Filter;
