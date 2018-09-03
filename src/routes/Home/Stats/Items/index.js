import React from 'react';
import Item from '../Item';
import styles from './index.css';

export default ({ userCount, donationCount, totalRaised, averageDonation }) => (
  <div className={styles.container}>
    <Item title="Users" value={userCount} />
    <Item title="Donations" value={donationCount} />
    <Item title="Raised" value={totalRaised} />
    <Item title="Average Donation" value={averageDonation} />
  </div>
);
