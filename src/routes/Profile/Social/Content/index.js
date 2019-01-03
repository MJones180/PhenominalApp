import React from 'react';
import Circles from './Circles';
import FollowedCharities from './FollowedCharities';
import Halos from './Halos';
import styles from './index.css';

export default ({ activeTab, tabContent, setTabContent, ownProfile, username }) => (
  <div className={styles.container}>
    {activeTab == 'circles' && <Circles ownProfile={ownProfile} username={username} />}
    {activeTab == 'followedCharities' && <FollowedCharities tabContent={tabContent} setTabContent={setTabContent} username={username} />}
    {activeTab == 'halos' && <Halos />}
  </div>
);
