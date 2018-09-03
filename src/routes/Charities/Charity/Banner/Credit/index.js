import React from 'react';
import styles from './index.css';

export default ({ name }) => {
  if (!name) return false;
  return (
    <div className={styles.credit}>
      Photograph by {name}
    </div>
  );
};
