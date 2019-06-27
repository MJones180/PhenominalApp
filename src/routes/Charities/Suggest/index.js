import React from 'react';
import HeadTags from './headTags';
import Form from './Form';
import Header from './Header';
import Representative from './Representative';
import styles from './index.css';

export default () => (
  <main className={styles.container}>
    <HeadTags />
    <Header />
    <Form />
    <Representative />
  </main>
);
