import React from 'react';
import styles from './index.css';

export default ({ children, className, title }) => (
  <section className={`${className} ${styles.container}`}>
    <h3 className={`general ${styles.title}`}>
      { title }
    </h3>
    { children }
  </section>
);
