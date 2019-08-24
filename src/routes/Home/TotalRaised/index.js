import React from 'react';
import Container from './container';
import styles from './index.css';

export default Container(({ totalRaised }) => (
  <section className={styles.align}>
    <div className={styles.container}>
      <h2 className={`general ${styles.amount}`}>
        {totalRaised}
      </h2>
      <div className={styles.label}>
        <p className="large"> Total Raised </p>
      </div>
    </div>
  </section>
));
