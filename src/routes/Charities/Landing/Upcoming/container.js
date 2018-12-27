import React from 'react';
import _ from 'lodash';
import { writtenDate } from 'utils/time';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { eventsUpcoming } }) => (
    <Component
      data={
        _.map(
          // Grab a unique list of the start dates
          _.uniq(_.map(
            // Display only charities, not special fundraisers
            _.filter(eventsUpcoming, ({ charity }) => charity),
            ({ startDate }) => startDate)
          ),
          // Loop through every edge
          date => ({
            startDate: writtenDate(date),
            // Remove all falsey values
            charities: _.compact(
              // Add event for corresponding date
              _.map(eventsUpcoming, ({ startDate, charity }) => (
                (startDate == date) &&
                  {
                    ein: charity.ein,
                    name: charity.name,
                  }
              ))
            ),
          })
        )
      }
    />
  );
  return () => <Query query={query} Component={RenderComponent} />;
};
