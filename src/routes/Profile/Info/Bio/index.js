import React from 'react';
import styles from './index.css';

export default ({ bio, created }) => (
  <div className={styles.container}>
    <p className="large"> {bio || 'This user does not seem to have a bio.'} </p>
    <div className={styles.date}> User since {created}. </div>
  </div>
);
