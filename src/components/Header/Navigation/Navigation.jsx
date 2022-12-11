import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Icon_arrow_down from '../../../assets/icons/Icon_arrow_down.svg';
import Icon_arrow_up from '../../../assets/icons/Icon_arrow_up.svg';
import NavigationLink from '../NavigationLink';
import NavDropdown from '../NavDropdown';
import { routes } from '../../../routes/routeConfig';
import styles from './Navigation.module';

const cn = classNames.bind(styles);

const Navigation = ({ fullScreenOverlay, toggleOverlayNavigation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef();
  const academiesRef = useRef();

  useEffect(() => {
    const handleCloseDropdown = (event) => {
      if (
        !dropdownRef?.current?.contains(event.target) &&
        !academiesRef?.current?.contains(event.target)
      )
        setIsOpen(false);
    };

    document.addEventListener('mousedown', handleCloseDropdown);
    document.addEventListener('keyup', handleCloseDropdown);

    return () => {
      document.removeEventListener('mousedown', handleCloseDropdown);
      document.removeEventListener('keyup', handleCloseDropdown);
    };
  }, []);

  return (
    <div
      className={cn('nav-wrapper', {
        'nav-wrapper__overlay': fullScreenOverlay,
      })}
    >
      <nav className={cn('nav')}>
        <ul
          className={cn('nav__list', {
            'nav__list-overlay': fullScreenOverlay,
          })}
        >
          <NavigationLink to={'#'} onClick={toggleOverlayNavigation}>
            About us
          </NavigationLink>
          <li className={cn('nav__list-item', 'nav__list-item--have-dropdown')}>
            <button
              className={cn('nav__link')}
              onClick={() => setIsOpen((prevState) => !prevState)}
              ref={academiesRef}
            >
              Academies
              {isOpen ? (
                <Icon_arrow_up className={cn('dropdown-icon')} />
              ) : (
                <Icon_arrow_down className={cn('dropdown-icon')} />
              )}
            </button>
            {isOpen && (
              <NavDropdown
                ref={dropdownRef}
                fullScreenOverlay={fullScreenOverlay}
                setIsOpen={setIsOpen}
                toggleOverlayNavigation={toggleOverlayNavigation}
              />
            )}
          </li>
          <NavigationLink to={'#'} onClick={toggleOverlayNavigation}>
            Media
          </NavigationLink>
          <NavigationLink
            to={routes.register}
            onClick={toggleOverlayNavigation}
          >
            Register
          </NavigationLink>
          <NavigationLink to={'#'} onClick={toggleOverlayNavigation}>
            Questions
          </NavigationLink>
        </ul>
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  fullScreenOverlay: PropTypes.bool,
  toggleOverlayNavigation: PropTypes.func,
};

export default Navigation;
