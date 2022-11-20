import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routeConfig';
import classNames from 'classnames/bind';
import styles from './Header.module';
import Logo_SA from '../../assets/logos/Logo_SA.svg';
import Icon_arrow_down from '../../assets/icons/Icon_arrow_down.svg';
import Icon_arrow_up from '../../assets/icons/Icon_arrow_up.svg';

const cn = classNames.bind(styles);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef();
  const academiesRef = useRef();

  useEffect(() => {
    const handleCloseDropdown = (event) => {
      if (
        !dropdownRef.current.contains(event.target) &&
        !academiesRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleCloseDropdown);

    return () => document.removeEventListener('mousedown', handleCloseDropdown);
  }, []);

  return (
    <header className={cn('header')}>
      <Link to={routes.home} className={cn('header-logo__wrapper')} href="#">
        <Logo_SA className={cn('logo-icon')} alt="Sourcery Academy logo" />
        <h1 className={cn('logo-name')}>Sourcery Academy</h1>
      </Link>
      <div className={cn('main-nav')}>
        <nav className={cn('main-nav__wrapper')}>
          <ul className={cn('main-nav__list')}>
            <li className={cn('main-nav__list-item')}>
              <a className={cn('main-nav__link')} href="#">
                About us
              </a>
            </li>
            <li
              className={cn(
                'main-nav__list-item',
                'main-nav__list-item--have-dropdown'
              )}
            >
              <a
                className={cn('main-nav__link')}
                href="#"
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
              </a>

              {isOpen && (
                <div className={cn('dropdown__wrapper')} ref={dropdownRef}>
                  <ul className={cn('dropdown__list')}>
                    <li className={cn('dropdown__list-item')}>
                      <Link
                        to={routes.developers}
                        className={cn('dropdown__link')}
                        href="#"
                      >
                        Sourcery for Developers
                      </Link>
                    </li>
                    <li className={cn('dropdown__list-item')}>
                      <Link
                        to={routes.testers}
                        className={cn('dropdown__link')}
                        href="#"
                      >
                        Sourcery for Testers
                      </Link>
                    </li>
                    <li className={cn('dropdown__list-item')}>
                      <Link
                        to={routes.frontEnd}
                        className={cn('dropdown__link')}
                        href="#"
                      >
                        Sourcery for Front-End
                      </Link>
                    </li>
                    <li className={cn('dropdown__list-item')}>
                      <Link
                        to={routes.kids}
                        className={cn('dropdown__link')}
                        href="#"
                      >
                        Sourcery for Kids
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className={cn('main-nav__list-item')}>
              <a className={cn('main-nav__link')} href="#">
                Media
              </a>
            </li>
            <li className={cn('main-nav__list-item')}>
              <a className={cn('main-nav__link')} href="#">
                Register
              </a>
            </li>
            <li className={cn('main-nav__list-item')}>
              <a className={cn('main-nav__link')} href="#">
                Questions
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
