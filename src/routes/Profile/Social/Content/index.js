import React from 'react';
import Circles from './Circles';
import FollowedCharities from './FollowedCharities';
import Halos from './Halos';
import styles from './index.css';

export default ({ activeTab, dataWrapper, ownProfile }) => (
  <div className={styles.container}>
    {activeTab == 'circles' && <Circles dataWrapper={dataWrapper} ownProfile={ownProfile} />}
    {activeTab == 'followedCharities' && <FollowedCharities dataWrapper={dataWrapper} />}
    {activeTab == 'halos' && <Halos dataWrapper={dataWrapper} />}
  </div>
);
