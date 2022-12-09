import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../Navigation/Navigation.module';

const cn = classNames.bind(styles);

function NavLink({ to, children }) {
  return (
    <li className={cn('nav__list-item')}>
      <Link className={cn('nav__link')} to={to}>
        {children}
      </Link>
    </li>
  );
}

NavLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NavLink;
