import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import useMediaQuery from '/src/hooks/useMediaQuery';
import AcademyDescription from '../AcademyDescription';
import styles from './AcademySection.module';

const cn = classNames.bind(styles);

function AcademySection({ data }) {
  const isDesktop = useMediaQuery('(min-width: 880px)');

  const {
    id,
    title,
    paragraph,
    buttonProps,
    img: Img,
    svgPath: SvgPath,
    invert: isInverted,
  } = data;

  const invert = isInverted ? 'academy-section--inv' : '';

  return (
    <section
      className={cn(['academy-section', `academy-section--${id}`, `${invert}`])}
    >
      <div className={cn('academy-section__description')}>
        <AcademyDescription
          title={title}
          paragraph={paragraph}
          isInverted={isInverted}
          buttonProps={buttonProps}
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

AcademySection.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    buttonProps: PropTypes.object.isRequired,
    img: PropTypes.func.isRequired,
    svgPath: PropTypes.func,
    invert: PropTypes.bool.isRequired,
  }).isRequired,
};

export default AcademySection;
