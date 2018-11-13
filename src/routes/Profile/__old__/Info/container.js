import React from 'react';
import { prettifyDate } from 'utils/time';

export default Component => (
  ({ data }) => (
    <Component
      createdAt={prettifyDate(data.createdAt)}
      name={`${data.nameFirst} ${data.nameLast}`}
    />
  )
);
