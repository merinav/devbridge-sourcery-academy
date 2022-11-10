import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module';
import Logo from '~/assets/svg/logo.svg';
import IconArrowDown from '~/assets/svg/icon-arrow-down.svg';

const cn = classNames.bind(styles);

export default function Header() {
  const goToHome = () => {
    // TODO: Implement routing logic
    return;
  };

  return (
    <header className={cn('header')}>
      <div className={cn('brandWrapper')} onClick={goToHome}>
        <Logo className={cn('image')} />
        <h1 className={cn('brandName')}>Sourcery Academy</h1>
      </div>
      <nav className={cn('nav')}>
        <a href="#">About us</a>
        <a href="#">
          Academies
          <IconArrowDown className={cn('icon')} />
        </a>
        <a href="#">Media</a>
        <a href="#">Register</a>
        <a href="#">Questions</a>
      </nav>
    </header>
  );
}
