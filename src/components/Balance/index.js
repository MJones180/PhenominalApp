import React from 'react';
import { currency } from 'utils/number';
import gql from 'graphql-tag';
import query from 'utils/graphql/query';
import { isAuth } from 'utils/auth/user';
import Button from 'components/Button';
import styles from './index.css';

const Balance = ({ balance, withButton }) => (
  <p className={`${styles.balance} ${withButton && styles.withButton}`}>
    Balance
    <span>{balance}</span>
  </p>
);

export default ({ noAddFunds }) => {
  class Component extends React.Component {
    constructor(props) {
      super(props);
      // Initial State
      this.state = {
        // Format the user's balance
        balance: currency(props.data.currentUserBalance),
      };
    }
    render() {
      return (
        // Do not display the add funds button
        noAddFunds ? <Balance {...this.state} /> : (
          <div className={styles.container}>
            <Button to="/add-funds" special className={styles.button}>
              Add Funds
            </Button>
            <Balance {...this.state} withButton />
          </div>
        )
      );
    }
  }
  // If the user is not authenticated then do not return a balance
  if (!isAuth()) return false;
  // Grab the user's balance
  return (
    query({
      query: gql`
        query {
          currentUserBalance
        }
      `,
      Component,
    })
  );
};
