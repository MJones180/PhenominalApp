import React from 'react';
import Container from './container';
import Bullet from '../Bullet';
import styles from './index.css';

export default Container(({ id, amount, balance, event }) => (
  <ul className={styles.item}>
    <Bullet info="Verification Number" value={id} />
    <Bullet info="Amount Donated" value={amount} />
    <Bullet info="New Balance" value={balance} />
    <Bullet info="Event Name" value={event} />
  </ul>
));
