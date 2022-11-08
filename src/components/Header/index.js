import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module';
import Logo from '~/assets/svg/logo.svg';
import IconArrowDown from '~/assets/svg/icon-arrow-down.svg';

const cn = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cn('header')}>
      <div className={cn('brandWrapper')}>
        <Logo className={cn('image')} />
        <h1 className={cn('brandName')}>Sourcery Academy</h1>
      </div>
      <div className={cn('linkWrapper')}>
        <a href="#">About us</a>
        <a href="#">
          Academies
          <IconArrowDown className={cn('icon')} />
        </a>
        <a href="#">Media</a>
        <a href="#">Register</a>
        <a href="#">Questions</a>
      </div>
    </header>
  );
}
