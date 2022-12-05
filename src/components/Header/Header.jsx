import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { routes } from '../../routes/routeConfig';
import Logo_SA from '../../assets/logos/Logo_SA.svg';
import Navigation from './Navigation';
import HamburgerButton from './Hamburger/HamburgerButton';
import mediaQuery from '../../hooks/mediaQuery';

import styles from './Header.module';

const cn = classNames.bind(styles);

const Header = () => {
  const isMobile = mediaQuery('(max-width: 880px)');

  const [showSidebar, setShowSidebar] = useState(false);

  function handleOnClick() {
    setShowSidebar(!showSidebar);
  }

  useEffect(() => {
    if (!isMobile) {
      setShowSidebar(false);
    }
  });

  return (
    <header className={cn('header')}>
      <Link
        className={cn('header__logo-wrapper')}
        to={routes.home}
        onClick={<Navigation />}
      >
        <Logo_SA className={cn('logo-icon')} alt="Sourcery Academy logo" />
        <h1 className={cn('logo-name')}>Sourcery Academy</h1>
      </Link>
      {isMobile && showSidebar ? (
        <>
          <HamburgerButton active={showSidebar} onClick={handleOnClick} />
          <Navigation navSidebar={'sidebar'} dropDownSidebar={'sidebar'} />
        </>
      ) : isMobile ? (
        <HamburgerButton active={showSidebar} onClick={handleOnClick} />
      ) : (
        <Navigation />
      )}
    </header>
  );
};

export default Header;
