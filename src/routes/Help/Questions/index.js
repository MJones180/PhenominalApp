import React from 'react';
import Account from './Account';
import Charities from './Charities';
import Donations from './Donations';
import Funds from './Funds';
import General from './General';
import Privacy from './Privacy';
import Social from './Social';
import SpecialFundraiser from './SpecialFundraiser';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <div className={styles.column}>
      <General />
      <Social />
      <Charities />
      <SpecialFundraiser />
    </div>
    <div className={styles.column}>
      <Funds />
      <Donations />
      <Account />
      <Privacy />
    </div>
  </div>
);
