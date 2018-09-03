import React from 'react';
import { currency, percent } from 'utils/number';
import { remaining } from 'utils/time';

export default Component => (
  ({ color, endDate, goal, total }) => (
    <Component
      color={color}
      goal={currency(goal)}
      percentage={percent(total / goal)}
      timeRemaining={remaining(endDate)}
      totalRaised={currency(total)}
    />
  )
);
