import React from 'react';
import Progress from '../../Progress';
import styles from './index.css';

export default props => ([
  <h5 className={styles.subTitle} key="subTitle">
    Progress
  </h5>,
  <Progress
    key="progress"
    {...props}
  />,
]);
