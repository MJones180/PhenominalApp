import React from 'react';
import Container from './container';
import styles from './index.css';

export default Container(data => (
  <section className={styles.container}>
    <div>
      <h4> <span className={styles.topText}>EIN:</span> <span className={styles.ein}>{data.ein}</span></h4>
      <h4>
        <span className={styles.topText}>
          Account:
        </span>
        <span className={styles[data.verified ? 'verified' : 'notVerified']}>
          {data.verified ? 'Verified' : 'Not Verified'}
        </span>
      </h4>
    </div>
    <div className={styles.topRight}>
      <h4><span className={styles.topText}>Created:</span> {data.createdAt}</h4>
      <h4><span className={styles.topText}>Updated:</span> {data.updatedAt}</h4>
    </div>
  </section>
));
