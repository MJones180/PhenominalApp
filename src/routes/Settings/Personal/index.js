import React from 'react';
import Form from './Form';
import styles from './index.css';

export default data => (
  <section className={styles.container}>
    <h3 className="general">
      Personal Information
    </h3>
    <Form {...data} />
  </section>
);
