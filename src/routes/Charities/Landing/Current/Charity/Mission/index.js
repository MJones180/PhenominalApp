import React from 'react';
import Link from 'components/Link';
import Box from '../Box';
import styles from './index.css';

export default ({ mission, website }) => (
  <Box title="Mission">
    <p className={styles.mission}>
      {mission}
    </p>
    <Link general className={styles.url} external={website}>
      View Site
    </Link>
  </Box>
);
