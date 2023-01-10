import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Icon_arrow_down from '/src/assets/icons/Icon_arrow_down.svg';
import Icon_arrow_up from '/src/assets/icons/Icon_arrow_up.svg';
import styles from './ExpandableCard.module.scss';

const cn = classNames.bind(styles);

const ExpandableCard = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn('expandable-card')}
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      {text}
      <button className={cn('expandable-card__button')}>
        {isOpen ? (
          <Icon_arrow_up className={cn('button-icon')} />
        ) : (
          <Icon_arrow_down className={cn('button-icon')} />
        )}
      </button>
    </div>
  );
};

ExpandableCard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExpandableCard;
