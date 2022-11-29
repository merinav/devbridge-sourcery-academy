import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AcadDescription from '../AcadDescription';
import styles from './AcadSection.module';

const cn = classNames.bind(styles);

function AcadSection({ data }) {
  const {
    id,
    title,
    paragraph,
    img: Img,
    svgPath: SvgPath,
    invert: invertBtn,
  } = data;

  const [showPath, setShowPath] = useState(false);

  useEffect(() => {
    const windowResizeHandler = () =>
      window.innerWidth > 880 ? setShowPath(true) : setShowPath(false);

    window.addEventListener('resize', windowResizeHandler);
    return () => window.removeEventListener('resize', windowResizeHandler);
  }, []);

  const invert = invertBtn ? 'academy-section--inv' : '';
  const imgModifier = showPath ? `img__${id}--path` : '';

  const renderedImage = showPath ? <SvgPath /> : <Img />;

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
          {renderedImage}
        </figure>
      </div>
    </section>
  );
}

AcadSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AcadSection;
