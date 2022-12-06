import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cn = classNames.bind(styles);

const COLOR = {
  RED: 'red',
  GREEN: 'green',
  VIOLET: 'violet',
  BLUE: 'blue',
};

const Button = ({
  color = COLOR.VIOLET,
  href,
  children,
  type,
  onClick,
  to,
  ariaLabel,
}) => {
  const className = cn(styles.button, {
    'button--red': color === COLOR.RED,
    'button--green': color === COLOR.GREEN,
    'button--blue': color === COLOR.BLUE,
    'button--violet': color === COLOR.VIOLET,
  });

  if (href) {
    return (
      <a
        href={href}
        className={className}
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
        className={className}
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
        className={className}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  color: PropTypes.oneOf(['red', 'green', 'violet', 'blue']),
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export default Button;
