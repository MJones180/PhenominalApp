import React from 'react';
import HeadTags from './headTags';
import Content from './Content';
import styles from './index.css';

export default () => (
  <main className={styles.container}>
    <HeadTags />
    <div className={styles.content}>
      <h2 className={styles.slogan}>
        Where change happens.
      </h2>
      <div className={styles.signin}>
        <div className={styles.box}>
          <h3 className={styles.header}>
            Charity Sign In
          </h3>
          <Content />
        </div>
      </div>
    </div>
  </main>
);
