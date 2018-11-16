import React from 'react';
import Pic from './Pic';
import Center from './Center';
import Right from './Right';
import Container from './container';
import styles from './index.css';

// <Pic loopCount={data.grabLoops.count} />

export default Container(({ data }) => (
  <section className={styles.container}>
    <Pic loopCount={314} />
    <Center />
    <Right />
  </section>
));
