import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './Overlay.module.scss';

const cn = classNames.bind(styles);

const Overlay = ({ children, onClick }) => {
  const prefersReducedMotion = useReducedMotion();

  const OVERLAY_ANIMATION_DROP_IN = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <motion.div
      className={cn('overlay')}
      onClick={onClick}
      variants={OVERLAY_ANIMATION_DROP_IN}
      initial="hidden"
      animate="visible"
      exit="exit"
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
