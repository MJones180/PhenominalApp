import React from 'react';
import Item from '../Item';
import styles from './index.css';

export default ({ donationCount, totalRaised, averageDonation }) => (
  <div className={styles.container}>
    <Item title="Donations" value={donationCount} />
    <Item title="Donated" value={totalRaised} />
    <Item title="Average Donation" value={averageDonation} />
  </div>
);
