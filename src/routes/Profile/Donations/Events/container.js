import React from 'react';
import _ from 'lodash';

export default Component => (
  ({ activeDate, donations }) => {
    // Grab each of the charity's info
    const charities = _.map(donations[activeDate], ({ donations }) => donations[0].event.charity);
    // Remove all duplicates
    const dedupe = _.uniqBy(charities, ({ ein }) => ein);
    return <Component charities={dedupe} />;
  }
);
