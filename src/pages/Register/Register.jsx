import React from 'react';
import classNames from 'classnames/bind';
import useTheme from '/src/hooks/useTheme';
import Image_Application_form from '~/assets/images/Image_Application_form.svg';
import Particles_bottom from '~/assets/images/Background_particles_Application_form_bottom.svg';
import Particles_top from '~/assets/images/Background_particles_Application_form_top.svg';
import Form from '../../components/Form';
import styles from './Register.module';

const cn = classNames.bind(styles);

const Register = () => {
  useTheme('purple');

  return (
    <>
      <section className={cn('register-wrapper')}>
        <Particles_top
          className={cn('register-wrapper__particles-top')}
          aria-hidden="true"
        />
        <h1 className={cn('register-wrapper__heading')}>
          Sourcery Academy Application
        </h1>
        <div className={cn('content-container')}>
          <div className={cn('content-container__register-container')}>
            <Form />
          </div>
          <figure className={cn('content-container__image-container')}>
            <Image_Application_form alt="" />
          </figure>
        </div>
        <Particles_bottom
          className={cn('register-wrapper__particles-bottom')}
          aria-hidden="true"
        />
      </section>
    </>
  );
};

export default Register;
