import React from 'react';
import _ from 'lodash';
import Table from 'components/Table';
import styles from './index.css';

export default ({ data }) => {
  // The table's columns
  const columns = [{
    field: 'sortable_name',
    name: 'name',
    width: styles.name,
  }];
  const formatted = _.map(data, props => ({
    ...props,
    // To sort, all of the names must be of the same case
    sortable_name: _.toLower(props.name),
  }));
  return (
    <Table
      columns={columns}
      data={formatted}
      fallbackSort="name"
      rowClick={{
        link: id => `/circles/${id}`,
        linkData: 'id',
      }}
      uid={_.uniqueId('~')}
      emptyMessage="No Circles found."
    />
  );
};
