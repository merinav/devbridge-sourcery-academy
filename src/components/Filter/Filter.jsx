import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '/src/components/Button/Button';
import styles from './Filter.module';

const cn = classNames.bind(styles);

const Filter = ({ data }) => {
  if (Array.isArray(data) && data.length && typeof data !== 'undefined') {
    return (
      <div className={cn('filter-wrapper')}>
        {data.map((item, index) => (
          <Button key={index}>{item}</Button>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

Filter.propTypes = {
  data: PropTypes.array,
};

export default Filter;
