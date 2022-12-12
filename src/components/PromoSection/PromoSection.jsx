import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PromoSection.module';

const cn = classNames.bind(styles);

const PromoSection = ({ data, children }) => {
  const { id, heading, par } = data;

  return (
    <>
      <section className={cn(['promo-section', `promo-section--${id}`])}>
        <div className={cn(['promo-text', `promo-text--${id}`])}>
          <h1
            className={cn([
              'promo-text__heading',
              `promo-text__heading--${id}`,
            ])}
          >
            {heading}
          </h1>
          <p className={cn(['promo-text__par', `promo-text__par--${id}`])}>
            {par}
          </p>
        </div>
        {children}
      </section>
    </>
  );
};

PromoSection.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default PromoSection;
