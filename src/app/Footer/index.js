import React from 'react';
import { Link } from 'react-router-dom';
import { image } from 'utils/endpoints';
import Social from './Social';
import styles from './index.css';

export default () => (
  <footer className={styles.container}>
    <div className={styles.logo}>
      <Link to="/">
        <img src={image('logos/logoIconBlank.png', { width: 100 })} alt="Icon" />
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
    <div className={styles.social}>
      <Social name="Facebook" link="https://facebook.com/PhenominalFund" />
      <Social name="Twitter" link="https://twitter.com/PhenominalFund" />
      <Social name="Instagram" link="https://www.instagram.com/phenominalfund/" />
      <Social name="Youtube" link="https://www.youtube.com/channel/UCPf040JYs-pU5sb-kv_HqEg" />
    </div>
    <p className={styles.copyright}>
      © 2018 Phenominal LLC. All rights reserved.
    </p>
  </footer>
);
