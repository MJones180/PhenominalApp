import React from 'react';
import Box from '../Box';
import Events from './Events';
import styles from './index.css';

export default data => (
  <Box className={styles.container} title="History">
    <Events {...data} />
  </Box>
);
