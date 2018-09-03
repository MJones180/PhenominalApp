import React from 'react';
import { prettifyDate } from 'utils/time';

export default Component => (
  ({ data }) => (
    <Component
      data={{
        ...data,
        updatedAt: prettifyDate(data.updatedAt),
      }}
    />
  )
);
