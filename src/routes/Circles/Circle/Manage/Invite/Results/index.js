import React from 'react';
import _ from 'lodash';
import Table from 'components/Table';
import Button from './Button';
import styles from './index.css';

export default ({ id, data }) => {
  // The table's columns
  const columns = [{
    cellStyle: styles.username,
    field: 'username',
  }, {
    cellContent: username => <Button id={id} username={username} />,
    cellStyle: styles.invite,
    disableSorting: true,
    field: 'invite',
    key: 'username',
  }];
  const formatted = _.map(data, ({ username }) => ({
    username,
    SORT_username: _.toLower(username),
  }));
  return (
    <Table
      columns={columns}
      data={formatted}
      defaultSort="SORT_username"
      fieldLink={{
        address: ({ username }) => `/profile/${username}`,
        fields: ['username'],
      }}
      uid={_.uniqueId('~')}
      emptyMessage="No users found."
    />
  );
};
