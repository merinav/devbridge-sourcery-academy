import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AcadDescription from '../AcadDescription';
import styles from './AcadSection.module';

const cn = classNames.bind(styles);

function AcadSection({ data, img: Img, bgSvg: BgSvg }) {
  const invert = data.invert ? 'academy-section--inv' : '';

  return (
    <section
      className={cn([
        'academy-section',
        `academy-section--${data.id}`,
        `${invert}`,
      ])}
    >
      <div className={cn('academy-section__description')}>
        <AcadDescription
          title={data.title}
          paragr={data.paragraph}
          invertBtn={data.invert}
        />
      </div>

      <div className={cn('academy-section__img')}>
        <figure className={cn(`img__${data.id}`)}>
          <Img />
          {BgSvg && (
            <div className={cn(['path', `path--${data.id}`])}>{<BgSvg />}</div>
          )}
        </figure>
      </div>
    </section>
  );
}

AcadSection.propTypes = {
  data: PropTypes.object.isRequired,
  img: PropTypes.func.isRequired,
  bgSvg: PropTypes.func,
};

export default AcadSection;
