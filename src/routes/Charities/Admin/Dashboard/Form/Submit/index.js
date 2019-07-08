import React from 'react';
import { Submit } from 'components/Button';
import styles from './index.css';

export default () => (
  <div>
    <h3 className={styles.submitTitle}> Submit Changes </h3>
    <Submit className={styles.submit} center>
        Update
    </Submit>
  </div>
);
