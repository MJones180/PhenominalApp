import React from 'react';
import Search from './Search';
import Suggest from './Suggest';
import styles from './index.css';

export default ({ change, input }) => (
  <section className={styles.container}>
    <Suggest />
    <Search change={change} input={input} />
  </section>
);
