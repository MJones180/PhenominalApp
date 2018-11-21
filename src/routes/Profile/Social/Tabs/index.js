import React from 'react';
import Tabs from 'components/Tabs';
import Tab from './Tab';
import styles from './index.css';

export default ({ circles, circlesCount, followedCharities, followedCharitiesCount }) => (
  <div className={styles.wrapper}>
    <Tabs
      className={styles.container}
      tabsClassName={styles.tabs}
      contentClassname={styles.content}
    >
      {Tab('Circles', 'circles', circles, circlesCount)}
      {Tab('Followed Charities', 'charities', followedCharities, followedCharitiesCount)}
    </Tabs>
  </div>
);
