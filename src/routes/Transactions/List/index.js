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
  // Grab the event from the json
  const grabEvent = data => _.get(data, 'charity.name') || _.get(data, 'specialFundraiser.name') || '-';
  // Format the data for the table
  const formatted = _.map(data, ({
    createdAt, amount, balance, type, event,
  }) => ({
    amount: currency(amount),
    balance: currency(balance),
    date: compactDate(createdAt),
    event: grabEvent(event),
    type: _.capitalize(_.replace(type, '_', ' ')),
    // The raw values, necessary for sorting
    SORT_amount: amount,
    SORT_balance: balance,
    SORT_date: createdAt,
    SORT_event: _.toLower(grabEvent(event)),
  }));
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
