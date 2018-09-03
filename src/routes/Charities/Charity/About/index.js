import React from 'react';
import Container from './container';
import Box from '../Box';
import Info from './Info';
import styles from './index.css';

export default Container(data => (
  <Box className={styles.container} title="About">
    <Info {...data} />
  </Box>
));
