import React from 'react';
import Box from '../Box';
import styles from './index.css';

export default ({ mission, website }) => (
  <Box title="Mission">
    <p className={styles.mission}>
      {mission}
    </p>
    <a className={`general ${styles.url}`} href={website} target="_blank" rel="noopener noreferrer">
      View Site
    </a>
  </Box>
);
