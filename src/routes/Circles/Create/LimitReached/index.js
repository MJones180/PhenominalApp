import React from 'react';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <h2 className="general">
      Circle Limit Reached
    </h2>
    <h3>
      You cannot create more than 3 Circles, you must first disband one of your others.
    </h3>
  </section>
);
