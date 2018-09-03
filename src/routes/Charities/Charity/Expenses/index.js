import React from 'react';
import Container from './container';
import Box from '../Box';
import Chart from './Chart';
import styles from './index.css';

export default Container(data => (
  <Box className={styles.container} title="Expenses">
    <div className={styles.chart}>
      <Chart {...data} />
    </div>
  </Box>
));
