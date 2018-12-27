import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default () => (
  <div>
    <h3 className={styles.title}>
      Donate Now
    </h3>
    <Button to="/charities" floatingBorder>
      View Today&apos;s Charities
    </Button>
  </div>
);
