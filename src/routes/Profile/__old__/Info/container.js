import React from 'react';
import { writtenDate } from 'utils/time';

export default Component => (
  ({ data }) => (
    <Component
      createdAt={writtenDate(data.createdAt)}
      name={`${data.nameFirst} ${data.nameLast}`}
    />
  )
);
