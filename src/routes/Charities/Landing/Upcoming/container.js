import React from 'react';
import _ from 'lodash';
import { prettifyDate } from 'utils/time';

export default Component => (
  ({ data }) => (
    <Component
      data={
        _.map(
          // Grab a unique list of the start dates
          _.uniq(_.map(
            // Display only charities, not special fundraisers
            _.filter(data, ({ charity }) => charity),
            ({ startDate }) => startDate)
          ),
          // Loop through every edge
          date => ({
            startDate: prettifyDate(date),
            // Remove all falsey values
            charities: _.compact(
              // Add event for corresponding date
              _.map(data, ({ startDate, charity }) => (
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
  )
);
