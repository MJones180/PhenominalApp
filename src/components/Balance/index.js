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
import Query from 'utils/graphql/query';
import { isAuth } from 'utils/auth/user';
import Link from 'components/Link';
import Button from 'components/Button';
import query from './query.graphql';
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
    <Link to="/balance">
      <p className={styles.balance}>
        Balance
        <span>{balance}</span>
      </p>
    </Link>
  );
  // Balance container
  const Component = ({ data: { currentUserBalance } }) => (
    <div className={styles.container}>
      {!justFunds && <AddFunds />}
      <Balance balance={currency(currentUserBalance)} />
    </div>
  );
  // Grab the authUser's balance
  return (
    Query({
      query,
      Component,
    })
  );
};
