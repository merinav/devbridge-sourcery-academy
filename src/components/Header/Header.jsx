import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routeConfig';
import classNames from 'classnames/bind';
import Logo_SA from '../../assets/logos/Logo_SA.svg';
import Icon_arrow_down from '../../assets/icons/Icon_arrow_down.svg';
import Icon_arrow_up from '../../assets/icons/Icon_arrow_up.svg';
import NavDropdown from './NavDropdown';
import styles from './Header.module';

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
    document.addEventListener('keydown', handleCloseDropdown);

    return () => {
      document.removeEventListener('mousedown', handleCloseDropdown);
      document.removeEventListener('keydown', handleCloseDropdown);
    };
  }, []);

  return (
    <header className={cn('header')}>
      <Link className={cn('header__logo-wrapper')} to={routes.home}>
        <Logo_SA className={cn('logo-icon')} alt="Sourcery Academy logo" />
        <h1 className={cn('logo-name')}>Sourcery Academy</h1>
      </Link>
      <div className={cn('nav-wrapper')}>
        <nav className={cn('nav')}>
          <ul className={cn('nav__list')}>
            <li className={cn('nav__list-item')}>
              <Link className={cn('nav__link')} to={'#'}>
                About us
              </Link>
            </li>
            <li
              className={cn('nav__list-item', 'nav__list-item--have-dropdown')}
            >
              <div
                className={cn('nav__link')}
                to={'#'}
                onClick={() => setIsOpen((isOpen) => !isOpen)}
                ref={academiesRef}
              >
                Academies
                {isOpen ? (
                  <Icon_arrow_up
                    className={cn('dropdown-icon')}
                    alt="Arrow up icon"
                  />
                ) : (
                  <Icon_arrow_down
                    className={cn('dropdown-icon')}
                    alt="Arrow down icon"
                  />
                )}
              </div>
              {isOpen && (
                <NavDropdown
                  ref={dropdownRef}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
              )}
            </li>
            <li className={cn('nav__list-item')}>
              <Link className={cn('nav__link')} to={'#'}>
                Media
              </Link>
            </li>
            <li className={cn('nav__list-item')}>
              <Link className={cn('nav__link')} to={'#'}>
                Register
              </Link>
            </li>
            <li className={cn('nav__list-item')}>
              <Link className={cn('nav__link')} to={'#'}>
                Questions
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
