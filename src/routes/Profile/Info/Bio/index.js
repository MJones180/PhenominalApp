import React from 'react';
import styles from './index.css';

export default ({ bio = 'This user does not seem to have a bio.', created }) => (
  <div className={styles.container}>
    <p className="large"> {bio} </p>
    <div className={styles.date}> User since {created}. </div>
  </div>
);
