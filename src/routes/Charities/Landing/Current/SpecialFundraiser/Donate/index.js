import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default ({ id }) => (
  <Button className={styles.button} to={`/donate/${id}`} center special>
    Donate Now
  </Button>
);
