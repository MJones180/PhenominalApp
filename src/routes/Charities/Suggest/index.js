import React from 'react';
import HeadTags from './headTags';
import Form from './Form';
import Header from './Header';
import styles from './index.css';

export default () => (
  <main className={styles.container}>
    <HeadTags />
    <Header />
    <Form />
  </main>
);
