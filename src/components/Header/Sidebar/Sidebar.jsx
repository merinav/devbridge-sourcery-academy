import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import Navigation from '../Navigation';
import styles from './Sidebar.module.scss';

const cn = classNames.bind(styles);

const Sidebar = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={cn('overlay')}>
      <Navigation className={cn('navmenu')} />
    </div>
  );
};

Sidebar.propTypes = {
  onClick: PropTypes.any,
};

export default Sidebar;
