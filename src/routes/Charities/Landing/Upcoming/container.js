import React from 'react';
import _ from 'lodash';
import { writtenDate } from 'utils/time';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { eventsUpcoming } }) => {
    // The events grouped by their startDate
    const grouped = _.groupBy(eventsUpcoming, ({ startDate }) => startDate);
    // Go through each startDate and format the charities
    const formatted = _.map(grouped, (charities, date) => ({
      // Prettify the date
      startDate: writtenDate(date),
      // Loop through each charity's EIN and name
      charities: _.map(charities, ({ charity: { ein, name } }) => ({ ein, name })),
    }));
    return <Component data={formatted} />;
  };
  return () => <Query query={query} Component={RenderComponent} />;
};
