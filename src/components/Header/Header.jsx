import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { routes } from '../../routes/routeConfig';
import Logo_SA from '../../assets/logos/Logo_SA.svg';
import Navigation from './Navigation';
import HamburgerButton from './Hamburger/HamburgerButton';
import useMediaQuery from '../../hooks/useMediaQuery';
import styles from './Header.module';

const cn = classNames.bind(styles);

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 880px)');

  const [showOverlay, setShowOverlay] = useState(false);

  function handleOnClick() {
    setShowOverlay(!showOverlay);
  }

  useEffect(() => {
    if (!isMobile) {
      setShowOverlay(false);
    }
  }, [isMobile]);

  const logoRef = useRef();

  useEffect(() => {
    const handleLogoClick = (event) => {
      if (logoRef?.current?.contains(event.target)) setShowOverlay(false);
    };

    document.addEventListener('click', handleLogoClick);

    return () => {
      document.removeEventListener('click', handleLogoClick);
    };
  }, []);

  return (
    <header className={cn('header')}>
      <Link
        className={cn('header__logo-wrapper')}
        to={routes.home}
        ref={logoRef}
      >
        <Logo_SA className={cn('logo-icon')} alt="Sourcery Academy logo" />
        <h1 className={cn('logo-name')}>Sourcery Academy</h1>
      </Link>
      {isMobile ? (
        <>
          <HamburgerButton active={showOverlay} onClick={handleOnClick} />
          {showOverlay && <Navigation fullScreenOverlay={isMobile} />}
        </>
      ) : (
        <Navigation />
      )}
    </header>
  );
};

export default Header;
