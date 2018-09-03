import React from 'react';
import Balance from 'components/Balance';
import Options from './Options';
import styles from './index.css';

export default props => (
  <section className={styles.container}>
    <div className={styles.header}>
      <h3 className="general">
        Choose the amount:
      </h3>
      <Balance />
    </div>
    <Options {...props} />
  </section>
);
