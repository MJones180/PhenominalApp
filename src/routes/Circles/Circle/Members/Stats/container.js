import React from 'react';
import _ from 'lodash';
import { comma } from 'utils/number';

export default Component => (
  ({ members }) => {
    // Number of members
    const memberCount = members.length;
    // Aggregate number of Dots from all of the members
    const dotTotal = _.sumBy(members, ({ dots }) => dots[0] && dots[0].total);
    const dotAverage = dotTotal / memberCount;
    return (
      <Component
        memberCount={memberCount}
        dotTotal={comma(dotTotal)}
        dotAverage={comma(dotAverage)}
      />
    );
  }
);
