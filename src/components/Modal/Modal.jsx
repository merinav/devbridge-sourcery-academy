import React, { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import Overlay from '../Overlay';
import styles from './Modal.module.scss';

const cn = classNames.bind(styles);

const Modal = ({ children, closeModal, isGallery = false }) => {
  const modalRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const MODAL_ANIMATION_DROP_IN = {
    hidden: {
      y: prefersReducedMotion ? '0' : '-20vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.1,
        type: prefersReducedMotion ? '' : 'spring',
        damping: prefersReducedMotion ? 0 : 20,
        stiffness: prefersReducedMotion ? 0 : 500,
        delay: prefersReducedMotion ? 0 : 0.05,
      },
    },
    exit: {
      y: prefersReducedMotion ? '0' : '20vh',
      opacity: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.2,
        type: prefersReducedMotion ? '0' : 'spring',
        damping: prefersReducedMotion ? 0 : 50,
        stiffness: prefersReducedMotion ? 0 : 800,
      },
    },
  };

  useEffect(() => {
    const keyListener = (e) => {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    };
    document.addEventListener('keydown', keyListener);
    return () => document.removeEventListener('keydown', keyListener);
  }, []);

  const handleTabKey = (e) => {
    const focusableModalElements = modalRef?.current?.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    if (!focusableModalElements || !focusableModalElements?.length) {
      return;
    }
    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement !== firstElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement !== lastElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  // eslint-disable-next-line no-undef
  const keyListenersMap = new Map([
    [27, closeModal],
    [9, handleTabKey],
  ]);

  return ReactDOM.createPortal(
    <Overlay onClick={closeModal}>
      <motion.div
        variants={MODAL_ANIMATION_DROP_IN}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className={cn('modal-content', { 'gallery-container': isGallery })}
      >
        <div ref={modalRef} className={cn('modal-content__inner-content')}>
          {children}
        </div>
      </motion.div>
    </Overlay>,
    document.getElementById('modal-portal')
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  isGallery: PropTypes.bool,
};

export default Modal;
