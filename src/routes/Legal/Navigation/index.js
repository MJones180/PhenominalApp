import React from 'react';
import { Link } from 'react-router-dom';
import Option from './Option';
import styles from './index.css';

export default ({ path }) => (
  <section className={styles.container}>
    <h3 className={`general ${styles.title}`}>
      <Link to={path}>
        Legal
      </Link>
    </h3>
    <Option path={path} route="privacy" name="Privacy Policy" />
    <Option path={path} route="terms" name="Terms of Service" />
  </section>
);
