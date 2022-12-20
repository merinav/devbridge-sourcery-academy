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
        className={cn('nav__link', ({ isActive }) =>
          isActive ? 'nav__link--active' : null
        )}
        to={to}
        onClick={onClick}
      >
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
