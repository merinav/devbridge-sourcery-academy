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
};

const Button = ({ color, href, children, type, onClick, to }) => {
  const className = cn(styles.button, {
    [styles['button--red']]: color === COLOR.RED,
    [styles['button--green']]: color === COLOR.GREEN,
    [styles['button--violet']]: color === COLOR.VIOLET,
  });

  console.log(className);

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  } else if (to) {
    return (
      <Link to={to} className={cn('button-wrapper')}>
        <button className={className} type={type || 'button'} onClick={onClick}>
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button type={type || 'button'} className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  color: PropTypes.oneOf(['red', 'green', 'violet']),
  href: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export default Button;
