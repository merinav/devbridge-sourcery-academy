import React from 'react';
import styles from './Footer.module.scss';
import FacebookLogo from '~/assets/svg/facebookLogo';
import TwitterLogo from '~/assets/svg/twitterLogo';
import InstagramLogo from '../../assets/svg/instagramLogo';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.iconsBox}>
        <div className={styles.iconBoxFacebook}>
          <div className={styles.iconEclipseFacebook}>
            <a href="https://www.facebook.com/devbridge">
              <FacebookLogo />
            </a>
          </div>
        </div>
        <div className={styles.iconBoxTwitter}>
          <div className={styles.iconEclipseTwitter}>
            <a href="https://twitter.com/devbridge">
              <TwitterLogo />
            </a>
          </div>
        </div>
        <div className={styles.iconBoxInstagram}>
          <div className={styles.iconEclipseInstagram}>
            <a href="https://www.instagram.com/devbridge/?hl=en">
              <InstagramLogo />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.textBox}>
        <div className={styles.text}> Copyright © 2022 Sourcery Academy </div>
      </div>
    </div>
  );
};

export default Footer;
