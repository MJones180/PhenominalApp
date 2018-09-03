import React from 'react';
import styles from './index.css';

export default ({ acronym, name }) => (
  <h4 className={styles.title}>
    {name} {' '}
    <abbr>
      {acronym}
    </abbr>
  </h4>
);
