import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module';
import Logo_SA from '~/assets/logos/Logo_SA.svg';
import Icon_arrow_down from '~/assets/icons/Icon_arrow_down.svg';
import Icon_arrow_up from '~/assets/icons/Icon_arrow_up.svg';

const cn = classNames.bind(styles);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cn('header')}>
      <a className={cn('brand-wrapper')} href="#">
        <Logo_SA className={cn('image')} alt="Sourcery Academy logo" />
        <h1 className={cn('brand-name')}>Sourcery Academy</h1>
      </a>
      <nav className={cn('nav')}>
        <a className={cn('link')} href="#">
          About us
        </a>
        <a
          className={cn('link')}
          href="#"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          Academies
          {!isOpen ? (
            <Icon_arrow_down className={cn('icon')} alt="Arrow down icon" />
          ) : (
            <Icon_arrow_up className={cn('icon')} alt="Arrow up icon" />
          )}
        </a>
        <a className={cn('link')} href="#">
          Media
        </a>
        <a className={cn('link')} href="#">
          Register
        </a>
        <a className={cn('link')} href="#">
          Questions
        </a>
      </nav>
    </header>
  );
}
