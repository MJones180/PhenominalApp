import React from 'react';
import _ from 'lodash';
import { currency } from 'utils/number';
import { compactDate } from 'utils/time';
import Table from 'components/Table';
import styles from './index.css';

export default ({ data }) => {
  // The table's columns
  const columns = [{
    field: 'raw_date',
    name: 'date',
    width: styles.date,
  }, {
    field: 'type',
    name: 'type',
    width: styles.type,
  }, {
    field: 'raw_amount',
    name: 'amount',
    width: styles.amount,
  }, {
    field: 'raw_balance',
    name: 'balance',
    width: styles.balance,
  }, {
    field: 'sortable_event',
    name: 'event',
    width: styles.event,
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
    raw_amount: amount,
    raw_balance: balance,
    raw_date: createdAt,
    // To sort, all of the data must be of the same case
    sortable_event: _.toLower(grabEvent(event)),
  }));
  return (
    <Table
      columns={columns}
      data={formatted}
      fallbackSort="raw_balance"
      uid={_.uniqueId('~')}
    />
  );
};
