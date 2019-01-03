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
  }, {
    field: 'ein',
    name: 'ein',
    width: styles.ein,
  }];
  const formatted = _.map(data, data => ({
    ...data,
    // To sort, all of the data must be of the same case
    sortable_name: _.toLower(data.name),
  }));
  return (
    <section className={styles.container}>
      <Table
        columns={columns}
        data={formatted}
        fallbackSort="name"
        rowClick={{
          link: ein => `/charities/${ein}`,
          linkData: 'ein',
        }}
        uid={_.uniqueId('~')}
        emptyMessage="No followed charities."
      />
    </section>
  );
};
