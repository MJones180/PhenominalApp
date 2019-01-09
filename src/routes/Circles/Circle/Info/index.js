import React from 'react';
import Container from './container';
import styles from './index.css';

export default Container(({ created, description, name }) => (
  <section className={styles.container}>
    <div className={styles.name}>
      <h2 className="general">
        {name}
      </h2>
      <p className="large">
        Created on {created}
      </p>
    </div>
    <p className={styles.description}>
      {description}
    </p>
  </section>
));
