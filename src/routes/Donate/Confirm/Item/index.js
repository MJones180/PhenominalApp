import React from 'react';
import Container from './container';
import Bullet from '../Bullet';
import styles from './index.css';

export default Container(({ id, amount, balance, event }) => (
  <ul className={styles.item}>
    <Bullet info="Event" value={event} />
    <Bullet info="Amount Donated" value={amount} />
    <Bullet info="Resulting Balance" value={balance} />
    <Bullet info="Verification Number" value={id} />
  </ul>
));
