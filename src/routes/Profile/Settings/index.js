import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <h4 className={`general ${styles.title}`}>
      Update information and preferences
    </h4>
    <Button to="/settings">
      Settings
    </Button>
  </section>
);
