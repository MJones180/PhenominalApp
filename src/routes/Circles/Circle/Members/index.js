import React from 'react';
import Container from './container';
import List from './List';
import Stats from './Stats';
import styles from './index.css';

export default Container(({ id, isOwner, members, ownerUsername }) => (
  <section className={styles.container}>
    <div className={styles.header}>
      <h3 className={`general ${styles.title}`}>
        Members
      </h3>
      <Stats members={members} />
    </div>
    <List id={id} isOwner={isOwner} members={members} ownerUsername={ownerUsername} />
  </section>
));
