import React from 'react';
import _ from 'lodash';
import { currency } from 'utils/number';
import { compactDate } from 'utils/time';
import Table from 'components/Table';
import styles from './index.css';

export default ({ data }) => {
  // The table's columns
  const columns = [{
    cellStyle: styles.date,
    field: 'date',
  }, {
    cellStyle: styles.type,
    field: 'type',
  }, {
    cellStyle: styles.amount,
    field: 'amount',
  }, {
    cellStyle: styles.balance,
    field: 'balance',
  }, {
    cellStyle: styles.event,
    field: 'event',
  }];
  // Format the data for the table
  const formatted = _.map(data, ({
    balance, createdAt, donations, funds,
  }) => {
    // The type of transaction
    const type = funds ? 'Funds Addition' : 'Donation';
    // Grab the charity's name if it is a donation
    const eventName = funds ? '-' : donations[0].event.charity.name;
    // If it is a donation, the amounts have to be summed up
    const amount = funds ? funds.amountAdded : _.reduce(donations, (sum, { amount }) => sum + amount, 0);
    return {
      amount: currency(amount),
      balance: currency(balance),
      date: compactDate(createdAt),
      event: eventName,
      type,
      // The raw values, necessary for sorting
      SORT_amount: amount,
      SORT_balance: balance,
      SORT_date: createdAt,
      SORT_event: _.toLower(eventName),
    };
  });
  return (
    <Table
      columns={columns}
      data={formatted}
      defaultSort="SORT_date"
      uid={_.uniqueId('~')}
      emptyMessage="You have no transactions."
    />
  );
};
