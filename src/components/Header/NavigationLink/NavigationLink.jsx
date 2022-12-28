import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../Navigation/Navigation.module';

const cn = classNames.bind(styles);

function NavigationLink({ to, children, onClick }) {
  return (
    <li className={cn('nav__list-item')}>
      <NavLink
        className={({ isActive }) =>
          cn(isActive ? 'nav__link--active' : 'nav__link')
        }
        to={to}
        onClick={onClick}
      >
        {/* // <NavLink className={({ isActive }) => (isActive ? styles.activeHeaderNavigationNavLink : styles.headerNavigationNavLink)} to="movies">
            Movies
          </NavLink> */}
        {/* {cn('nav__link', ({ isActive }) =>
          isActive ? 'nav__link--active' : null
        )} */}

        {children}
      </NavLink>
    </li>
  );
}

NavigationLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default NavigationLink;
