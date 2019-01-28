import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <h3 className="general">
      Halos
    </h3>
    <Button to="/halos" className={styles.button}>
      Halo Information
    </Button>
  </div>
);
