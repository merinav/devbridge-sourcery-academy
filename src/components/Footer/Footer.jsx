import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import TwitterLogo from '~/assets/svg/twitterLogo.svg';
import FacebookLogo from '../../assets/svg/facebookLogo.svg';
import InstagramLogo from '../../assets/svg/instagramLogo.svg';

const cn = classNames.bind(styles);

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
  return (
    <footer className={cn('footer-wrapper')}>
      <div className={cn('icons-wrapper')}>
        <div className={cn('icon-box')}>
          <a
            href="https://www.facebook.com/devbridge"
            className={cn('icon-eclipse')}
          >
            <FacebookLogo alt="Link to Facebook" className={cn('image')} />
          </a>
        </div>
        <div className={cn('icon-box')}>
          <a
            href="https://twitter.com/devbridge"
            className={cn('icon-eclipse')}
          >
            <TwitterLogo alt="Link to Twitter" className={cn('image')} />
          </a>
        </div>
        <div className={cn('icon-box')}>
          <a
            href="https://www.instagram.com/devbridge/?hl=en"
            className={cn('icon-eclipse')}
          >
            <InstagramLogo alt="Link to Instagram" className={cn('image')} />
          </a>
        </div>
      </div>
      <div className={cn('text')}> Copyright © {year} Sourcery Academy </div>
    </footer>
  );
};

export default Footer;
