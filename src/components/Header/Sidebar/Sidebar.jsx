import React from 'react';
import classNames from 'classnames/bind';
import Navigation from '../Navigation';
import styles from './Sidebar.module.scss';

const cn = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cn('overlay')}>
      <Navigation className={cn('navmenu')} />
    </div>
  );
};

export default Sidebar;
