import React from 'react';
import Donate from './Donate';
import Tab from './Tab';
import styles from './index.css';

export default ({ activeTab, tabClick }) => (
  <div className={styles.container}>
    <Donate />
    <div className={styles.tabs}>
      <Tab active={activeTab == 'halos'} name="Halos" onClick={() => tabClick('halos')} />
      <Tab active={activeTab == 'circles'} name="Circles" onClick={() => tabClick('circles')} />
      <Tab active={activeTab == 'followedCharities'} name="Followed Charities" onClick={() => tabClick('followedCharities')} />
    </div>
  </div>
);
