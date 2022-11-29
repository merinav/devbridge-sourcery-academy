import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const cn = classNames.bind(styles);

const Card = ({ children }) => {
  return (
    <article className={cn('card-component')}>
    </article>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;

