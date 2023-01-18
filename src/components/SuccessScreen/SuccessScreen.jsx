import React from 'react';
import classNames from 'classnames/bind';
import IconSuccess from '/src/assets/icons/Icon_Application_form_success.svg';
import styles from './SuccessScreen.module';

const cn = classNames.bind(styles);

const SuccessScreen = () => {
  return (
    <div className={cn('success-screen')}>
      <IconSuccess className={cn('success-screen__icon')} />
      <p className={cn('success-screen__heading')}>Thank you!</p>
      <p className={cn('success-screen__text')}>Your form was submitted</p>
    </div>
  );
};

export default SuccessScreen;
