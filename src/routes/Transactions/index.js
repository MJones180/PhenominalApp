import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import List from './List';
import styles from './index.css';

export default Container(({ data }) => (
  <main className={styles.container}>
    <HeadTags />
    <h3 className="general">
      Transactions
    </h3>
    <List data={data.currentUser.transactions} />
  </main>
));
