import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default () => (
  <div className={styles.content}>
    <h4 className="general">
      Donate what you want
    </h4>
    <p className="large">
      Donate however much you would like, for there is no minimum amount.
      All donations count. Let&apos;s create change together.
    </p>
    <Button to="/charities" className={styles.button}>
      View Today&apos;s Charities
    </Button>
  </div>
);
