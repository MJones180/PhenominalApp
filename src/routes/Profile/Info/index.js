import React from 'react';
import Container from './container';
import styles from './index.css';

export default Container(({ data: { currentUser } }) => (
  <section className={styles.container}>
    Test: {currentUser.nameFirst} {currentUser.nameLast}
  </section>
));
