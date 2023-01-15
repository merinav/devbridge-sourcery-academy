import React from 'react';
import { useFormik, Formik, Form, Field } from 'formik';
//import PropTypes from 'prop-types';
import classNames from 'classnames/bind.js';
import Filter from '/src/components/Filter';
import Button from '/src/components/Button';
import Icon_Upload from '~/assets/icons/Icon_Application_form_upload.svg';
import styles from './Form.module';

const cn = classNames.bind(styles);

const RegisterForm = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     resume: '',
  //   },
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        resume: '',
      }}
      onSubmit={async (values) => {
        await ((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      //add handleSubmit instead of async
    >
      <Form>
        <h3 className={cn('form-section-header')}>Academy information</h3>
        <div className={cn('form-container')}>
          <div className={cn('filter-container')}>
            <label htmlFor="city" className={cn('label')}>
              Academy type
            </label>
            <Filter data={['Developers', 'Testers', 'Front-End']} />
          </div>
          <div className={cn('radio-container')}>
            <label htmlFor="city" className={cn('label')}>
              Academy city
            </label>
            <div>
              <Field type="radio" name="city" value="Kaunas" />
              Kaunas
              <Field type="radio" name="city" value="Vilnius" />
              Vilnius
            </div>
          </div>
          <h3 className={cn('form-section-header')}>Personal information</h3>
          <div className={cn('input-container')}>
            <label
              htmlFor="firstName"
              className={cn('label', 'label--personal')}
            >
              First name
            </label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              className={cn('input-container__input')}
            />

            <label
              htmlFor="lastName"
              className={cn('label', 'label--personal')}
            >
              Last name
            </label>
            <Field
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              className={cn('input-container__input')}
            />

            <label htmlFor="email" className={cn('label', 'label--personal')}>
              Email
            </label>
            <Field
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              className={cn('input-container__input')}
            />

            <label htmlFor="resume" className={cn('label', 'label--personal')}>
              Resume
            </label>

            <Field
              id="resume"
              name="resume"
              placeholder="Upload your resume"
              className={cn('input-container__input')}

              //   type="email"
            />

            <label>
              <div className={cn('checkbox-container')}>
                <Field
                  type="checkbox"
                  name="checked"
                  value="Agreed"
                  className={cn('checkbox-container__checkbox')}
                />
                <p className={cn('checkbox-container__text')}>
                  I have read, understand and accept the content of the Privacy
                  Notice and consent to the processing of my data as part of
                  this application.
                </p>
              </div>
            </label>

            <Button type={'submit'} className={cn('input-container__button')}>
              {'Register'}
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

// Step.propTypes = {
//   step: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   isInverted: PropTypes.bool,
//   academy: PropTypes.oneOf(Object.values(ACADEMIES)).isRequired,
// };

export default RegisterForm;
