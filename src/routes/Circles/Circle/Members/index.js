import React from 'react';
import Container from './container';
import List from './List';
import styles from './index.css';

export default Container(({ count, members }) => (
  <section className={styles.container}>
    <h3 className="general">
      Members ({count})
    </h3>
    <List members={members} />
  </section>
));
