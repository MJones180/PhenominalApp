import React from 'react';
import { image } from 'utils/endpoints';
import Box from '../Box';
import styles from './index.css';

export default () => (
  <Box link="/donate" title="Donate">
    <div className={styles.circle}>
      <img src={image('assets/Home/Coin.png')} className={styles.coin} alt="Coin" />
    </div>
  </Box>
);
