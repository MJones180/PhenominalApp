import React from 'react';
import Empty from '../Empty';
import Rows from '../Rows';
import styles from './index.css';

export default (label, route, data, count) => (
  <div label={`${label} (${count})`} className={styles.tab} activeClassName={styles.activeTab}>
    {count ? <Rows route={route} data={data} /> : <Empty label={label} />}
  </div>
);
