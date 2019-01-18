import React from 'react';
import Container from './container';
import List from './List';
import Stats from './Stats';
import styles from './index.css';

export default Container(({ members, owner }) => (
  <section className={styles.container}>
    <div className={styles.header}>
      <h3 className={`general ${styles.title}`}>
        Members
      </h3>
      <Stats members={members} />
    </div>
    <List members={members} owner={owner} />
  </section>
));
