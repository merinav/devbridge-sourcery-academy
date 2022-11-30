import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routeConfig';
import classNames from 'classnames/bind';
import Logo_SA from '../../assets/logos/Logo_SA.svg';
import Navigation from './Navigation';
import styles from './Header.module';

const cn = classNames.bind(styles);

function Header() {
  return (
    <header className={cn('header')}>
      <Link className={cn('header__logo-wrapper')} to={routes.home}>
        <Logo_SA className={cn('logo-icon')} alt="Sourcery Academy logo" />
        <h1 className={cn('logo-name')}>Sourcery Academy</h1>
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
