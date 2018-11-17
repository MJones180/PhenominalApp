import React from 'react';
import { writtenDate } from 'utils/time';

export default Component => (
  ({ data }) => (
    <Component
      data={{
        ...data,
        updatedAt: writtenDate(data.updatedAt),
      }}
    />
  )
);
