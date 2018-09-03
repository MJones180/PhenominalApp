import React from 'react';
import Progress from '../../Progress';
import Box from '../Box';
import styles from './index.css';

export default props => (
  <Box title="Progress">
    <Progress
      color={styles.progress}
      {...props}
    />
  </Box>
);
