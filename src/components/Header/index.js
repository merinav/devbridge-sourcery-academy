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
      <a className={cn('brand-wrapper')} href="#">
        <Logo className={cn('image')} alt="Sourcery Academy logo" />
        <h1 className={cn('brand-name')}>Sourcery Academy</h1>
      </a>
      <nav className={cn('nav')}>
        <a href="#">About us</a>
        <a href="#">
          Academies
          <IconArrowDown className={cn('icon')} alt="Arrow down icon" />
        </a>
        <a href="#">Media</a>
        <a href="#">Register</a>
        <a href="#">Questions</a>
      </nav>
    </header>
  );
}
