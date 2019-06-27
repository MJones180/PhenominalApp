import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import styles from './index.css';

export default Container(data => (
  <main className={styles.container}>
    {console.log('data: ', data)}
    <HeadTags />
    <div className={styles.content}>
      <h2 className={styles.slogan}>
        Bazinga
      </h2>
    </div>
  </main>
));
