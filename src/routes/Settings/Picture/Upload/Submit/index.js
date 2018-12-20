import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default ({ newPic, submit }) => newPic && (
  <div className={styles.container}>
    <Button onClick={submit}> Update Picture </Button>
  </div>
);
