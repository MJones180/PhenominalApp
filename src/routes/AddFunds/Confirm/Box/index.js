import React from 'react';
import Bullet from '../Bullet';
import styles from './index.css';

export default ({ amountCharged, amountReceived, balance, transactionID }) => (
  <ul className={styles.item}>
    <Bullet info="Verification Number" value={transactionID} />
    <Bullet info="Funds Added" value={amountCharged} />
    <Bullet info="Funds Received" value={amountReceived} />
    <Bullet info="New Balance" value={balance} />
  </ul>
);
