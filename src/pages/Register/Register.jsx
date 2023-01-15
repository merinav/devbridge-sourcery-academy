import React from 'react';
import classNames from 'classnames/bind';
import useTheme from '/src/hooks/useTheme';
import Image_Application_form from '~/assets/images/Image_Application_form.svg';

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
            <div className={cn('academy-info-container')}>
              <h3 className={cn('academy-info-container__sub-heading')}>
                Academy information
              </h3>
              <div className={cn('academy-info-container__academy-filter')}>
                FILTER component
              </div>
              <div className={cn('academy-info-container__city')}>
                FILTER component
              </div>
            </div>
            <div className={cn('personal-info-container')}>
              <h3 className={cn('personal-info-container__sub-heading')}>
                Personal information
              </h3>
              <div className={cn('personal-info-container__form')}>
                FORM component
              </div>
            </div>
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
