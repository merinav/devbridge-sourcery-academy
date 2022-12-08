import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const cn = classNames.bind(styles);

const Modal = ({ children, closeModal }) => {
  return (
    <div className={cn('modal')} onClick={closeModal}>
      <div
        className={cn('modal__content')}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func,
};

export default Modal;
