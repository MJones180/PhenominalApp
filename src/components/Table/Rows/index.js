import React from 'react';
import _ from 'lodash';
import Row from './Row';

export default ({ columns, data, fieldLink }) => (
  <div>
    {_.map(data, (data, index) => (
      <Row columns={columns} data={data} fieldLink={fieldLink} key={index} />)
    )}
  </div>
);
