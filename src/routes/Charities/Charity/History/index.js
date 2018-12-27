import React from 'react';
import Container from './container';
import Box from '../Box';
import Events from './Events';
import styles from './index.css';

export default Container(data => (
  <Box className={styles.container} title="History">
    <Events {...data} />
  </Box>
));
