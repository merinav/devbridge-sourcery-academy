import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routeConfig';
import classNames from 'classnames/bind';
import Logo_SA from '../../assets/logos/Logo_SA.svg';
import Navigation from './Navigation';
import HamburgerButton from './Hamburger/HamburgerButton';
import mediaQuery from '../../hooks/mediaQuery';
import styles from './Header.module';

const cn = classNames.bind(styles);

function Header() {
  const isMobile = mediaQuery('(max-width: 880px)');

  // const [showSidebar, setShowSidebar] = useState(false);

  // function handleOnClick() {
  //   setShowSidebar(!showSidebar);
  // }

  // function handleOnBackDropClick() {
  //   setShowSidebar(false);
  // }

  // useEffect(() => {
  //   if (!isMobile) {
  //     setShowSidebar(false);
  //   }
  // });

  return (
    // <header className={styles.header}>
    //       <MyMoviesLogo className={styles.icon} />
    //       {isMobile ? <HamburgerButton isActive={showSidebar} onClick={handleOnClick} /> : <MainNavigation />}
    //       {isMobile && showSidebar && <Sidebar onBackDropClick={handleOnBackDropClick} />}
    //     </header>

    <header className={cn('header')}>
      <Link className={cn('header__logo-wrapper')} to={routes.home}>
        <Logo_SA className={cn('logo-icon')} alt="Sourcery Academy logo" />
        <h1 className={cn('logo-name')}>Sourcery Academy</h1>
      </Link>

      {isMobile ? <HamburgerButton /> : <Navigation />}
    </header>
  );
}

export default Header;
