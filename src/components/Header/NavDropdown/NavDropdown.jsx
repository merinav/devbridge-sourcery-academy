import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes/routeConfig';
import classNames from 'classnames/bind';
import styles from './NavDropdown.module';

const cn = classNames.bind(styles);

const NavDropdown = forwardRef(function NavDropdown(props, ref) {
  const setIsOpen = props.setIsOpen;

  return (
    <>
      <div className={cn('dropdown-wrapper')} ref={ref}>
        <ul className={cn('dropdown__list')}>
          <li className={cn('dropdown__list-item')}>
            <Link
              className={cn('dropdown__link')}
              to={routes.developers}
              onClick={() => setIsOpen(false)}
            >
              Sourcery for Developers
            </Link>
          </li>
          <li className={cn('dropdown__list-item')}>
            <Link
              className={cn('dropdown__link')}
              to={routes.testers}
              onClick={() => setIsOpen(false)}
            >
              Sourcery for Testers
            </Link>
          </li>
          <li className={cn('dropdown__list-item')}>
            <Link
              className={cn('dropdown__link')}
              to={routes.frontEnd}
              onClick={() => setIsOpen(false)}
            >
              Sourcery for Front-End
            </Link>
          </li>
          <li className={cn('dropdown__list-item')}>
            <Link
              className={cn('dropdown__link')}
              to={routes.kids}
              onClick={() => setIsOpen(false)}
            >
              Sourcery for Kids
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
});

NavDropdown.propTypes = {
  setIsOpen: PropTypes.func,
};

export default NavDropdown;
