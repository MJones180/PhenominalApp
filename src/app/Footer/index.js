import React from 'react';
import { Link } from 'react-router-dom';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default () => (
  <footer className={styles.container}>
    <div className={styles.logo}>
      <Link to="/">
        <img src={image('logos/logoIconBlank.png')} alt="Icon" />
      </Link>
    </div>
    <div className={styles.links}>
      <p>
        <Link to="/about">
          About
        </Link>
      </p>
      <p>
        <Link to="/contact">
          Contact
        </Link>
      </p>
      <p>
        <Link to="/legal/privacy">
          Privacy Policy
        </Link>
      </p>
      <p>
        <Link to="/legal/terms">
          Terms of Service
        </Link>
      </p>
    </div>
    <div className={styles.socialMedia}>
      <a className={styles.facebook} href="https://facebook.com/PhenominalFund">
        <img src={image('logos/SocialMedia_Facebook.svg')} alt="Icon" />
      </a>
      <a className={styles.twitter} href="https://twitter.com/PhenominalFund">
        <img src={image('logos/SocialMedia_Twitter.svg')} alt="Icon" />
      </a>
      <a className={styles.youtube} href="https://www.youtube.com/channel/UCPf040JYs-pU5sb-kv_HqEg">
        <img src={image('logos/SocialMedia_Youtube.svg')} alt="Icon" />
      </a>
    </div>
    <p className={styles.copyright}>
      © 2018 Phenominal LLC. All rights reserved.
    </p>
  </footer>
);
