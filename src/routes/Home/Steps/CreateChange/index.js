import React from 'react';
import { image } from 'utils/endpoints';
import Box from '../Box';
import styles from './index.css';

export default () => (
  <Box link="/charities" title="Create Change">
    <div className={styles.outlineX} />
    <div className={styles.outlineY} />
    <div className={styles.circle} />
    <img src={image('logos/logoIcon.png')} className={styles.logo} alt="Logo" />
  </Box>
);
