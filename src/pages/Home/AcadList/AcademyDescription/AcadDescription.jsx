import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AcadDescription.module';

function AcadDescription({ title, paragr, img }) {
  return <div>AcadDescription</div>;
}

AcadDescription.propTypes = {
  title: PropTypes.string.isRequired,
  paragr: PropTypes.string.isRequired,
  img: PropTypes.element,
};

export default AcadDescription;
