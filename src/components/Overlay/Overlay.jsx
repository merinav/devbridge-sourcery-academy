import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import styles from './Overlay.module.scss';

const cn = classNames.bind(styles);

const Overlay = ({ children, onClick }) => {
  return (
    <motion.div
      className={cn('overlay')}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key="overlay"
    >
      {children}
    </motion.div>
  );
};

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Overlay;
