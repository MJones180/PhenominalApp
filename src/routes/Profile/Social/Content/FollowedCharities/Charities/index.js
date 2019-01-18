import React from 'react';
import _ from 'lodash';
import Table from 'components/Table';
import styles from './index.css';

export default ({ data }) => {
  // The table's columns
  const columns = [{
    key: 'name',
    width: styles.name,
  }, {
    key: 'ein',
    title: 'EIN',
    width: styles.ein,
  }];
  const formatted = _.map(data, data => ({
    ...data,
    SORT_name: _.toLower(data.name),
  }));
  return (
    <section className={styles.container}>
      <Table
        columns={columns}
        data={formatted}
        defaultSort="SORT_name"
        fieldLink={{
          address: ({ ein }) => `/charities/${ein}`,
          fields: '*',
        }}
        uid={_.uniqueId('~')}
        emptyMessage="No followed charities."
      />
    </section>
  );
};
