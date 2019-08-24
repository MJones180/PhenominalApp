import React from 'react';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default () => (
  <img src={image('assets/Home/Coin.png')} className={styles.coin} alt="Coin" />
);
