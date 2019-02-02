import React from 'react';
import _ from 'lodash';

export default Component => (
  ({ activeDate, donations }) => {
    // Remove all duplicate events
    const dedupeEvents = _.uniqBy(donations[activeDate], ({ event }) => {
      // Use charity's EIN for key
      if (event.charity) return event.charity.ein;
      // Use special fundraiser's name for key
      return event.specialFundraiser.name;
    });
    // Grab all events of a certain type
    const grabEvents = type => _.compact(_.map(dedupeEvents, ({ event }) => event[type]));
    return (
      <Component
        charities={grabEvents('charity')}
        specialFundraisers={grabEvents('specialFundraiser')}
      />
    );
  }
);
