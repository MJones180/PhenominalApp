import React from 'react';
import _ from 'lodash';
import Table from 'components/Table';
import { comma } from 'utils/number';
import Kick from './Kick';
import styles from './index.css';

export default ({ id, isOwner, members, ownerUsername }) => {
  // The table's columns
  const columns = [{
    cellStyle: styles[isOwner ? 'usernameReduced' : 'username'],
    field: 'username',
  }, {
    cellStyle: styles.dots,
    field: 'dots',
  }];
  // If the user is the owner, add a column to kick members
  if (isOwner) {
    columns.push({
      cellContent: username => <Kick id={id} username={username} owner={ownerUsername} />,
      cellStyle: styles.kick,
      disableSorting: true,
      field: 'kick',
      key: 'username',
    });
  }
  const data = _.map(members, ({ dots, username }) => ({
    // Prettify the Dots
    dots: comma(dots[0] && dots[0].total),
    username,
    SORT_dots: dots[0] && dots[0].total,
    SORT_username: _.toLower(username),
  }));
  return (
    <Table
      columns={columns}
      data={data}
      defaultSort="SORT_username"
      fieldLink={{
        address: ({ username }) => `/profile/${username}`,
        fields: ['dots', 'username'],
      }}
      uid={_.uniqueId('~')}
    />
  );
};
