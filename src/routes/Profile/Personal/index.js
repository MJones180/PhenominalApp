import React from 'react';
import Balance from 'components/Balance';
import Button from 'components/Button';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <div className={styles.links}>
      <Button to="/friend-invite">
        Friend Invite
      </Button>
      <Button to="/transactions">
        Transactions
      </Button>
      <Button to="/settings">
        Setings
      </Button>
    </div>
    <Balance />
  </section>
);
