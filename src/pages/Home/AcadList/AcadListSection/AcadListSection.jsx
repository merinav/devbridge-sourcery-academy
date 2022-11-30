import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AcadDescription from '../AcadDescription';
import styles from './AcadListSection.module';

const cn = classNames.bind(styles);

function AcadListSection({ data }) {
  const [showPath, setShowPath] = useState(false);

  const windowResizeHandler = useCallback(() => {
    return window.innerWidth > 880 ? setShowPath(true) : setShowPath(false);
  }, []);

  useEffect(() => {
    console.log(window.innerWidth, document.documentElement.clientWidth);
    windowResizeHandler();

    window.addEventListener('resize', windowResizeHandler);
    return () => window.removeEventListener('resize', windowResizeHandler);
  }, [windowResizeHandler]);

  const {
    id,
    title,
    paragraph,
    img: Img,
    svgPath: SvgPath,
    invert: invertBtn,
  } = data;

  const invert = invertBtn ? 'academy-section--inv' : '';
  const imgModifier = showPath ? `img__${id}--path` : '';

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
          {showPath ? <SvgPath /> : <Img />}
        </figure>
      </div>
    </section>
  );
}

AcadListSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AcadListSection;
