import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '/src/components/Button/Button';
import styles from './Filter.module';

const cn = classNames.bind(styles);

const Filter = ({ data, onClick }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
    console.log(`select ${item}`); // TODO remove after testing
    onClick(item);
  };

  if (Array.isArray(data) && data.length && typeof data !== 'undefined') {
    return (
      <div className={cn('filter-wrapper')}>
        {data.map((item, index) => (
          // <Button
          //   key={index}
          //   onClick={() => handleItemClick(item)}
          //   className={cn('button', `${activeItem === item ? 'active' : ''}`)}
          // >
          //   {item}
          // </Button>

          <button
            key={index}
            onClick={() => handleItemClick(item)}
            className={cn('button', `${activeItem === item ? 'active' : ''}`)}
          >
            {item}
          </button>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

Filter.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
};

export default Filter;
