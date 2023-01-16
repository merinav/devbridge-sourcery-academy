import React from 'react';
import classNames from 'classnames/bind';
import useTheme from '/src/hooks/useTheme';
import Image_Application_form from '~/assets/images/Image_Application_form.svg';

import Form from '../../components/Form';

import styles from './Register.module';

const cn = classNames.bind(styles);

const Register = () => {
  useTheme('purple');

  return (
    <>
      <section className={cn('register-wrapper')}>
        <h1 className={cn('heading')}>Sourcery Academy Application</h1>
        <div className={cn('content-container')}>
          <div className={cn('content-container__register-container')}>
            <Form />
          </div>
          <figure className={cn('content-container__image-container')}>
            <Image_Application_form alt="" />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Register;
