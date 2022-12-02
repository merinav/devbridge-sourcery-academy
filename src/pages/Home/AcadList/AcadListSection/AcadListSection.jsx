import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AcadDescription from '../AcadDescription';
import styles from './AcadListSection.module';
import useMediaQuery from '/src/hooks/useMediaQuery';

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
  const imgModifier = isDesktop ? `img__${id}--path` : '';

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
        <figure className={cn(`img__${id}`, `${imgModifier}`)}>
          {isDesktop ? <SvgPath /> : <Img />}
        </figure>
      </div>
    </section>
  );
}

AcadListSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AcadListSection;
