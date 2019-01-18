import React from 'react';
import _ from 'lodash';
import Table from 'components/Table';
import styles from './index.css';

export default ({ data }) => {
  // The table's columns
  const columns = [{
    key: 'name',
    width: styles.name,
  }];
  const formatted = _.map(data, props => ({
    ...props,
    SORT_name: _.toLower(props.name),
  }));
  return (
    <Table
      columns={columns}
      data={formatted}
      defaultSort="SORT_name"
      fieldLink={{
        address: ({ id }) => `/circles/${id}`,
        fields: '*',
      }}
      uid={_.uniqueId('~')}
      emptyMessage="No Circles found."
    />
  );
};
