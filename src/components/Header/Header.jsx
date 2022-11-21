import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routeConfig';
import classNames from 'classnames/bind';
import styles from './Header.module';
import Logo_SA from '../../assets/logos/Logo_SA.svg';
import Icon_arrow_down from '../../assets/icons/Icon_arrow_down.svg';
import Icon_arrow_up from '../../assets/icons/Icon_arrow_up.svg';
import MainNavDropdown from '../MainNavDropdown';

const cn = classNames.bind(styles);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef();
  const academiesRef = useRef();

  useEffect(() => {
    const handleCloseDropdown = (event) => {
      if (
        !dropdownRef?.current?.contains(event.target) &&
        !academiesRef?.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleCloseDropdown);

    return () => document.removeEventListener('mousedown', handleCloseDropdown);
  }, []);

  return (
    <header className={cn('header')}>
      <Link className={cn('header-logo__wrapper')} to={routes.home}>
        <Logo_SA className={cn('logo-icon')} alt="Sourcery Academy logo" />
        <h1 className={cn('logo-name')}>Sourcery Academy</h1>
      </Link>
      <div className={cn('main-nav')}>
        <nav className={cn('main-nav__wrapper')}>
          <ul className={cn('main-nav__list')}>
            <li className={cn('main-nav__list-item')}>
              <Link className={cn('main-nav__link')} to={'#'}>
                About us
              </Link>
            </li>
            <li
              className={cn(
                'main-nav__list-item',
                'main-nav__list-item--have-dropdown'
              )}
            >
              <Link
                className={cn('main-nav__link')}
                to={'#'}
                onClick={() => setIsOpen((isOpen) => !isOpen)}
                ref={academiesRef}
              >
                Academies
                {isOpen ? (
                  <Icon_arrow_up
                    className={cn('list-item__link--icon')}
                    alt="Arrow up icon"
                  />
                ) : (
                  <Icon_arrow_down
                    className={cn('list-item__link--icon')}
                    alt="Arrow down icon"
                  />
                )}
              </Link>
              {isOpen && <MainNavDropdown ref={dropdownRef} />}
            </li>
            <li className={cn('main-nav__list-item')}>
              <Link className={cn('main-nav__link')} to={'#'}>
                Media
              </Link>
            </li>
            <li className={cn('main-nav__list-item')}>
              <Link className={cn('main-nav__link')} to={'#'}>
                Register
              </Link>
            </li>
            <li className={cn('main-nav__list-item')}>
              <Link className={cn('main-nav__link')} to={'#'}>
                Questions
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
