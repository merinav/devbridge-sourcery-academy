import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes/routeConfig';
import classNames from 'classnames/bind';
import styles from './NavDropdown.module';

const cn = classNames.bind(styles);

const NavDropdown = forwardRef(function NavDropdown(props, ref) {
  const handleOpenDropdown = props.handleOpenDropdown;

  const dropdownItems = [
    {
      text: 'Sourcery for Developers',
      routePath: routes.developers,
      id: 'developers',
    },
    {
      text: 'Sourcery for Testers',
      routePath: routes.testers,
      id: 'testers',
    },
    {
      text: 'Sourcery for Front-End',
      routePath: routes.frontEnd,
      id: 'frontEnd',
    },
    {
      text: 'Sourcery for Kids',
      routePath: routes.kids,
      id: 'kids',
    },
  ];

  return (
    <>
      <div className={cn('dropdown-wrapper')} ref={ref}>
        <ul className={cn('dropdown__list')}>
          {dropdownItems.map((item, index) => (
            <li className={cn('dropdown__list-item')} key={item.id}>
              <Link
                className={cn('dropdown__link')}
                to={item.routePath}
                onClick={handleOpenDropdown}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

NavDropdown.propTypes = {
  handleOpenDropdown: PropTypes.func,
};

export default NavDropdown;
