/*
NAME
  Balance [Component]
USAGE
  return <Balance {...props} />
PROPS
  - justFunds: [bool] should just the balance be shown
NOTES
  - Requires an authUser
*/

import React from 'react';
import { currency } from 'utils/number';
import query from 'utils/graphql/query';
import { isAuth } from 'utils/auth/user';
import Button from 'components/Button';
import styles from './index.css';

export default ({ justFunds }) => {
  // If there is no authUser then don't do anything
  if (!isAuth()) return false;
  // Add Funds component, can be hidden
  const AddFunds = () => (
    <Button to="/add-funds" special className={styles.button}>
      Add Funds
    </Button>
  );
  // Current Balance component
  const Balance = ({ balance }) => (
    <p className={styles.balance}>
      Balance
      <span>{balance}</span>
    </p>
  );
  // Balance container
  const Component = ({ data: { grabUserBalance: { balance } } }) => (
    <div className={styles.container}>
      {!justFunds && <AddFunds />}
      <Balance balance={currency(balance)} />
    </div>
  );
  // Grab the authUser's balance
  return (
    query({
      query: 'query { grabUserBalance { balance } }',
      Component,
    })
  );
};
