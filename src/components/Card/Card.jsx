import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const cn = classNames.bind(styles);
const COLOR = {
  VIOLET: 'violet',
  BLUE: 'blue',
  GREEN: 'green',
  RED: 'red',
};
const Card = ({ color, children }) => {
  const className = cn(styles.card, {
    'card--violet': color === COLOR.VIOLET,
    'card--blue': color === COLOR.BLUE,
    'card--green': color === COLOR.GREEN,
    'card--red': color === COLOR.RED,
  });
  return <div className={className}>{children}</div>;
};

Card.propTypes = {
  color: PropTypes.oneOf(['violet', 'blue', 'green', 'red']),
  children: PropTypes.node.isRequired,
};

export default Card;
