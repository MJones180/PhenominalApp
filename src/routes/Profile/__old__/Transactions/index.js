import React from 'react';
import Transactions from 'components/Transactions';
import Notice from './Notice';
import styles from './index.css';

export default ({ data }) => (
  <section className={styles.container}>
    <h3 className="general">
      Transactions
    </h3>
    <Transactions data={data.transactions} />
    <Notice />
  </section>
);
