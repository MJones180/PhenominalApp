import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default ({ editMode, reset }) => editMode && (
  <div className={styles.container}>
    <Button onClick={reset}> Reset </Button>
  </div>
);
