import React from 'react';
import Container from './container';
import styles from './index.css';

export default Container(({ kick, isOwner }) => {
  if (isOwner) return <div> &nbsp; </div>;
  return (
    <div className={styles.container}>
      <div onClick={kick} className={styles.button}>
        <p> ✕ </p>
      </div>
    </div>
  );
});
