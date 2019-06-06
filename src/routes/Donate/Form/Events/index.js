import React from 'react';
import Charities from './Charities';
import styles from './index.css';

export default props => (
  <section className={styles.container}>
    <h3 className={`general ${styles.title}`}>
      Select the charity:
    </h3>
    <Charities {...props} />
  </section>
);
