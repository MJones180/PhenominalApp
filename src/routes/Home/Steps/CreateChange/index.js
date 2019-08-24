import React from 'react';
import Button from 'components/Button';
import Logo from './Logo';
import Quote from './Quote';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <Quote />
    <div className={styles.content}>
      <div className={styles.title}>
        <h2>3</h2>
        <h3 className="general">
          Create Change
        </h3>
      </div>
      <Logo />
      <p className={`large ${styles.text}`}>
        Remember, change starts with you.
        If everyone gives a little, the sum of those donations will amount to great value.
        Small Donation. Big Change.
      </p>
      <Button to="/charities" className={styles.button}>
        View Today&apos;s Charities
      </Button>
    </div>
  </div>
);
