import React from 'react';
import Typist from 'react-typist';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <Typist
      avgTypingDelay={35}
      className={styles.center}
      cursor={{ show: false }}
      stdTypingDelay={15}
    >
      <h3 className={styles.text} key="title">
        Our mission is to provide a medium to allow anyone regardless of age or socioeconomic background to donate and make a difference.
      </h3>
    </Typist>
  </section>
);
