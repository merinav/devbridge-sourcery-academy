import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routeConfig';
import classNames from 'classnames/bind';
import styles from './MainNavDropdown.module';

const cn = classNames.bind(styles);

const MainNavDropdown = forwardRef(function MainNavDropdown(props, ref) {
  return (
    <>
      <div className={cn('dropdown__wrapper')} ref={ref}>
        <ul className={cn('dropdown__list')}>
          <li className={cn('dropdown__list-item')}>
            <Link className={cn('dropdown__link')} to={routes.developers}>
              Sourcery for Developers
            </Link>
          </li>
          <li className={cn('dropdown__list-item')}>
            <Link className={cn('dropdown__link')} to={routes.testers}>
              Sourcery for Testers
            </Link>
          </li>
          <li className={cn('dropdown__list-item')}>
            <Link className={cn('dropdown__link')} to={routes.frontEnd}>
              Sourcery for Front-End
            </Link>
          </li>
          <li className={cn('dropdown__list-item')}>
            <Link className={cn('dropdown__link')} to={routes.kids}>
              Sourcery for Kids
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
});

export default MainNavDropdown;
