import React from 'react';
import classNames from 'classnames/bind';
import Icon_hamburger_closed from '../../../assets/icons/Icon_hamburger_closed.svg';
import Icon_hamburger_open from '../../../assets/icons/Icon_hamburger_open.svg';
import styles from './HamburgerButton.module';

const cn = classNames.bind(styles);

const HamburgerButton = () => {
  const [isOpen, setisOpen] = React.useState(false);
  return (
    <>
      {isOpen ? (
        <button onClick={() => setisOpen(false)}>
          <Icon_hamburger_closed className={cn('icon')} />
        </button>
      ) : (
        <button onClick={() => setisOpen(true)}>
          <Icon_hamburger_open className={cn('icon')} />
        </button>
      )}
    </>
  );
};

export default HamburgerButton;
