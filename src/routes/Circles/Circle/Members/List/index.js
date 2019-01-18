import React from 'react';
import _ from 'lodash';
import Table from 'components/Table';
import { comma } from 'utils/number';
import styles from './index.css';

export default ({ members }) => {
  // The table's columns
  const columns = [{
    key: 'username',
    width: styles.username,
  }, {
    key: 'dots',
    width: styles.dots,
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
