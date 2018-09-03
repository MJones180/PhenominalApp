import React from 'react';
import Transactions from 'components/Transactions';
import HeadTags from './headTags';
import Container from './container';
import styles from './index.css';

export default Container(({ data }) => (
  <main className={styles.container}>
    <HeadTags />
    <h3 className="general">
      Transactions
    </h3>
    <Transactions data={data.currentUser.transactions} />
  </main>
));
