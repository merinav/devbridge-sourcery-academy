import React, { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';
import Overlay from '../Overlay';
import styles from './Modal.module.scss';

const cn = classNames.bind(styles);

const MODAL_ANIMATION_DROP_IN = {
  hidden: {
    y: '-20vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 20,
      stiffness: 500,
      delay: 0.05,
    },
  },
  exit: {
    y: '20vh',
    opacity: 0,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 50,
      stiffness: 800,
    },
  },
};

const Modal = ({ children, closeModal }) => {
  const modalRef = useRef(null);
  const modalIsInView = useInView(modalRef);

  useEffect(() => {
    if (modalIsInView) {
      modalRef.current.focus();
    }
  }, [modalIsInView]);
  // TO DO: fix modal focus

  const handleKeyDown = useCallback(
    //TO DO: fix keyDown execution
    (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  return ReactDOM.createPortal(
    <div onKeyDown={handleKeyDown} ref={modalRef}>
      <Overlay onClick={closeModal}>
        <motion.div
          variants={MODAL_ANIMATION_DROP_IN}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className={cn('modal-content')}
        >
          <div>{children}</div>
        </motion.div>
      </Overlay>
    </div>,
    document.getElementById('modal-portal')
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
