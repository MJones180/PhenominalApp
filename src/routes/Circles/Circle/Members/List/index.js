import React from 'react';
import _ from 'lodash';
import Table from 'components/Table';
import { comma } from 'utils/number';
import styles from './index.css';

export default ({ members }) => {
  // The table's columns
  const columns = [{
    field: 'sortable_username',
    name: 'username',
    width: styles.name,
  }, {
    field: 'sortable_dots',
    name: 'dots',
    width: styles.dots,
  }];
  const formatted = _.map(members, ({ dots, username }) => {
    // Grab the first item for the current Dot Total
    const dotTotal = dots[0].total;
    return {
      // Prettify the Dots
      dots: comma(dotTotal),
      username,
      // To sort, Dots must be comma-less
      sortable_dots: dotTotal,
      // To sort, all of the data must be of the same case
      sortable_username: _.toLower(username),
    };
  });
  return (
    <Table
      columns={columns}
      data={formatted}
      fallbackSort="username"
      rowClick={{
        link: username => `/profile/${username}`,
        linkData: 'username',
      }}
      uid={_.uniqueId('~')}
    />
  );
};
