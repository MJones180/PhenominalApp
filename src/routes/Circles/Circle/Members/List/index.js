import React from 'react';
import _ from 'lodash';
import Table from 'components/Table';
import { comma } from 'utils/number';
import styles from './index.css';

export default ({ members, owner }) => {
  const kick = (username) => {
    const ownerUsername = owner.username;
    return (
      <div onClick={() => console.log(username)} className={styles.kick}>
      ✕
      </div>
    );
  };
  // The table's columns
  const columns = [{
    field: 'username',
    width: styles.username,
  }, {
    field: 'dots',
    width: styles.dots,
  }, {
    cellContent: kick,
    disableSorting: true,
    field: 'kick',
    key: 'username',
    width: styles.kick,
  }];
  const data = _.map(members, ({ dots, username }) => ({
    // Prettify the Dots
    dots: comma(dots[0].total),
    username,
    SORT_dots: dots[0].total,
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
