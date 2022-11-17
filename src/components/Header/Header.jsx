import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module';
import Logo_SA from '~/assets/logos/Logo_SA.svg';
import Icon_arrow_down from '~/assets/icons/Icon_arrow_down.svg';

const cn = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cn('header')}>
      <a className={cn('brand-wrapper')} href="#">
        <Logo_SA className={cn('image')} alt="Sourcery Academy logo" />
        <h1 className={cn('brand-name')}>Sourcery Academy</h1>
      </a>
      <nav className={cn('nav')}>
        <a href="#">About us</a>
        <a href="#">
          Academies
          <Icon_arrow_down className={cn('icon')} alt="Arrow down icon" />
        </a>
        <a href="#">Media</a>
        <a href="#">Register</a>
        <a href="#">Questions</a>
      </nav>
    </header>
  );
}
