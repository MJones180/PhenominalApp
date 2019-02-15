import React from 'react';
import Content from './Content';
import Quote from './Quote';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <Quote />
    <Content />
  </section>
);
