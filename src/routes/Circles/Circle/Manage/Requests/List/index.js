import React from 'react';
import _ from 'lodash';
import Table from 'components/Table';
import Button from './Button';
import styles from './index.css';

export default ({ id, joinRequests }) => {
  // The table's columns
  const columns = [{
    cellStyle: styles.username,
    field: 'username',
  }, {
    // Column to accept the join request
    cellContent: username => <Button accept id={id} username={username} />,
    cellStyle: styles.accept,
    disableSorting: true,
    field: 'accept',
    key: 'username',
  }, {
    // Column to deny the join request
    cellContent: username => <Button accept={false} id={id} username={username} />,
    cellStyle: styles.deny,
    disableSorting: true,
    field: 'deny',
    key: 'username',
  }];
  const data = _.map(joinRequests, ({ user: { username } }) => ({
    username,
    SORT_username: _.toLower(username),
  }));
  return (
    <Table
      columns={columns}
      data={data}
      defaultSort="SORT_username"
      fieldLink={{
        address: ({ username }) => `/profile/${username}`,
        fields: ['username'],
      }}
      uid={_.uniqueId('~')}
      emptyMessage="No join requests."
    />
  );
};
