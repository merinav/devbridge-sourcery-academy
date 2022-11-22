import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cn = classNames.bind(styles);

const COLOR = {
  RED: 'red',
  GREEN: 'green',
  BLUE: 'blue',
  VIOLET: 'violet',
};

const Button = (props) => {
  const className = cn(styles.button, {
    [styles.red]: props.color === COLOR.RED,
    [styles.green]: props.color === COLOR.GREEN,
    [styles.blue]: props.color === COLOR.BLUE,
    [styles.violet]: props.color === COLOR.VIOLET,
  });

  if (props.href) {
    return (
      <a href={props.href} className={className}>
        {props.children}
      </a>
    );
  }
  return (
    <button
      type={props.type || 'button'}
      className={`${cn('button')} ${className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
