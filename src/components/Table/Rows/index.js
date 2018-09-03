import React from 'react';
import _ from 'lodash';
import Row from '../Row';

export default ({ columns, data, rowClick }) => (
  <div>
    {_.map(data, (data, index) => (
      <Row columns={columns} data={data} rowClick={rowClick} key={index} />
    ))}
  </div>
);
