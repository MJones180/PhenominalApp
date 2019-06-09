import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default ({ ein, id }) => (
  <div className={styles.buttons}>
    <Button to={`/donate/${id}`} special className={styles.button}>
      Donate Now
    </Button>
    <Button to={`/charities/${ein}`}>
      View Charity
    </Button>
  </div>
);
