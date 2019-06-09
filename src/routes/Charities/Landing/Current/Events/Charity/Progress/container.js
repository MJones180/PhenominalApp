import React from 'react';
import { currency, percent } from 'utils/number';
import { remaining } from 'utils/time';

export default Component => (
  ({ endDate, goal, total }) => (
    <Component
      goal={currency(goal)}
      percentage={percent(total / goal)}
      timeRemaining={remaining(endDate)}
      totalRaised={currency(total)}
    />
  )
);
