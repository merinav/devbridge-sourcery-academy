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

  function validateFirstName(value) {
    let error;
    if (!value) {
      error = 'Please enter your first name';
    } else if (!/^[a-z ,.'-]+$/i.test(value)) {
      error = 'Entry is not valid. Please try again.';
    }
    return error;
  }

  function validateLastName(value) {
    let error;
    if (!value) {
      error = 'Please enter your last name';
    } else if (!/^[a-z ,.'-]+$/i.test(value)) {
      error = 'Entry is not valid. Please try again.';
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Please enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Entry is not valid. Please try again.';
    }
    return error;
  }

  return (
    <Formik
      initialValues={{
        city: 'Kaunas',
        firstName: '',
        lastName: '',
        email: '',
        resume: '',
        terms: '',
      }}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
      //add handleSubmit instead of async
    >
      {({ errors, touched, isValidating }) => (
        <Form className={cn('form-container')}>
          <h3 className={cn('form-container__header')}>Academy information</h3>
          <div className={cn('filter-container')}>
            <label htmlFor="city" className={cn('label')}>
              Academy type
            </label>
            <div className={cn('filter-container__filter')}>
              <Filter data={['Developers', 'Testers', 'Front-End']} />
            </div>
          </div>
          <div className={cn('radio-container')}>
            <label htmlFor="city" className={cn('label')}>
              Academy city
            </label>
            <div className={cn('radio-container__multiple-button-container')}>
              <div className={cn('single-radio-button-container')}>
                <div className={cn('single-radio-button-container__button')}>
                  <Field type="radio" id="city" name="city" value="Kaunas" />
                </div>
                <div className={cn('single-radio-button-container__value')}>
                  Kaunas
                </div>
              </div>
              <div className={cn('single-radio-button-container')}>
                <div className={cn('single-radio-button-container__button')}>
                  <Field type="radio" id="city" name="city" value="Vilnius" />
                </div>
                <div className={cn('single-radio-button-container__value')}>
                  Vilnius
                </div>
              </div>
            </div>
          </div>
          <h3 className={cn('form-container__header')}>Personal information</h3>
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
              validate={validateFirstName}
              className={cn('input-container__input')}
            />
            {errors.firstName && touched.firstName && (
              <div className={cn('label', 'label--error-message')}>
                {errors.firstName}
              </div>
            )}

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
              validate={validateLastName}
              className={cn('input-container__input')}
            />
            {errors.lastName && touched.lastName && (
              <div className={cn('label', 'label--error-message')}>
                {errors.lastName}
              </div>
            )}

            <label htmlFor="email" className={cn('label', 'label--personal')}>
              Email
            </label>
            <Field
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              className={cn('input-container__input')}
              validate={validateEmail}
            />
            {errors.email && touched.email && (
              <div className={cn('label', 'label--error-message')}>
                {errors.email}
              </div>
            )}

            <label htmlFor="resume" className={cn('label', 'label--personal')}>
              Resume
            </label>

            <input
              id="resume"
              name="resume"
              type="file"
              placeholder="Upload your resume"
              className={cn('input-container__input')}
              // onChange={(event) => {
              //   setFieldValue("file", event.currentTarget.files[0]);}}
            />

            <label>
              <div className={cn('checkbox-container')}>
                <Field
                  type="checkbox"
                  name="terms"
                  value="agreed"
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
        </Form>
      )}
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
