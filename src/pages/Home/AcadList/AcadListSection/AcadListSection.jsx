import React from 'react';
import useMediaQuery from '/src/hooks/useMediaQuery';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AcadDescription from '../AcadDescription';
import styles from './AcadListSection.module';

const cn = classNames.bind(styles);

function AcadListSection({ data }) {
  const isDesktop = useMediaQuery('(min-width: 880px)');

  const {
    id,
    title,
    paragraph,
    img: Img,
    svgPath: SvgPath,
    invert: invertBtn,
  } = data;

  const invert = invertBtn ? 'academy-section--inv' : '';

  return (
    <section
      className={cn(['academy-section', `academy-section--${id}`, `${invert}`])}
    >
      <div className={cn('academy-section__description')}>
        <AcadDescription
          title={title}
          paragr={paragraph}
          invertBtn={!!invert}
        />
      </div>

      <div className={cn('academy-section__img')}>
        {SvgPath && isDesktop && (
          <SvgPath className={cn(`img__${id}--path`)} aria-hidden="true" />
        )}
        <Img className={cn(`img__${id}`)} aria-hidden="true" />
      </div>
    </section>
  );
}

AcadListSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AcadListSection;
