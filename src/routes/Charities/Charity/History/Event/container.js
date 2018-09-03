import React from 'react';
import { comma, currency, percent } from 'utils/number';
import { prettifyDate } from 'utils/time';

export default Component => (
  ({ data }) => (
    <Component
      date={prettifyDate(data.startDate)}
      donated={currency(data.total)}
      goal={currency(data.goal)}
      donations={comma(data.count)}
      percentage={percent(data.total / data.goal)}
    />
  )
);
