import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cn = classNames.bind(styles);

const Button = ({ children, href, to, type, onClick, ariaLabel }) => {
  if (href) {
    return (
      <a
        href={href}
        className={cn('button')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  } else if (to) {
    return (
      <Link
        to={to}
        className={cn('button')}
        type={type}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        type={type || 'button'}
        className={cn('button')}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};

export default Button;
