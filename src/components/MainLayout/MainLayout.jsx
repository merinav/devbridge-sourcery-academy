import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '../Header';
import Footer from '../Footer';
import styles from './MainLayout.module';

const cn = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div className={cn('main-layout')}>
      <Header />
      <main className={cn('main-layout__main')}>{children}</main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
