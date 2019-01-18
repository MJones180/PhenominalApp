import React from 'react';
import styles from './index.css';

export default (username, owner) => {
  let disabled = false;
  if (username == owner) disabled = true;
  return (
    <div className={styles.container}>
      <div onClick={() => !disabled && console.log(username)} className={styles.button}>
        <p> ✕ </p>
      </div>
    </div>
  );
};
