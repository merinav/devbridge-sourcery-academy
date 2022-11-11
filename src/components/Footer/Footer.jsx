import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import FacebookLogo from '~/assets/svg/facebookLogo';
import TwitterLogo from '~/assets/svg/twitterLogo';
import InstagramLogo from '../../assets/svg/instagramLogo';

const cn = classNames.bind(styles);
const today = new Date();
const year = today.getFullYear();

const Footer = () => {
  return (
    <footer className={cn('footer-wrapper')}>
      <div className={cn('icons-wrapper')}>
        <div className={cn('icon-box-facebook')}>
          <a href="https://www.facebook.com/devbridge">
            <div className={cn('icon-eclipse-facebook')}>
              <FacebookLogo alt="Link to Facebook" />
            </div>
          </a>
        </div>
        <div className={cn('icon-box-twitter')}>
          <a href="https://twitter.com/devbridge">
            <div className={cn('icon-eclipse-twitter')}>
              <TwitterLogo alt="Link to Twitter" />
            </div>
          </a>
        </div>
        <div className={cn('icon-box-instagram')}>
          <a href="https://www.instagram.com/devbridge/?hl=en">
            <div className={cn('icon-eclipse-instagram')}>
              <InstagramLogo alt="Link to Instagram" />
            </div>
          </a>
        </div>
      </div>
      <div className={cn('text')}> Copyright © {year} Sourcery Academy </div>
    </footer>
  );
};

export default Footer;
