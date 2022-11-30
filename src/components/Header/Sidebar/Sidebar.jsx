import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.css';

const cn = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cn('icon')} onClick>
      <div className={styles.sidebarTakeover}>
        <nav className={styles.navmenu}>{/* <MainNavigation /> */}</nav>
      </div>
    </div>
  );
};

export default Sidebar;
