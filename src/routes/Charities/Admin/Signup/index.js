import React from 'react';
import HeadTags from './headTags';
import Content from './Content';
import styles from './index.css';

export default () => (
  <main className={styles.container}>
    <HeadTags />
    <div className={styles.content}>
      <div className={styles.signup}>
        <div className={styles.box}>
          <h3 className={styles.header}>
            Charity Sign Up
          </h3>
          <Content />
        </div>
      </div>
    </div>
  </main>
);
