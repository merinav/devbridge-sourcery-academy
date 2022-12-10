import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Icon_arrow_down from '../../../assets/icons/Icon_arrow_down.svg';
import Icon_arrow_up from '../../../assets/icons/Icon_arrow_up.svg';
import NavLink from '../NavLink';
import NavDropdown from '../NavDropdown';
import { routes } from '../../../routes/routeConfig';
import styles from './Navigation.module';

const cn = classNames.bind(styles);

const Navigation = ({ fullScreenOverlay }) => {
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
          <NavLink to={'#'}>About us</NavLink>
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
              />
            )}
          </li>
          <NavLink to={'#'}>Media</NavLink>
          <NavLink to={routes.register}>Register</NavLink>
          <NavLink to={'#'}>Questions</NavLink>
        </ul>
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  fullScreenOverlay: PropTypes.bool,
};

export default Navigation;
