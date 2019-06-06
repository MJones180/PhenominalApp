import React from 'react';
import _ from 'lodash';

export default Component => (
  ({ events, setFieldTouched, setFieldValue, values }) => (
    <Component
      events={
        _.map(events, (event) => {
          // Event's ID
          const { id } = event;
          // Bool for if the event is checked
          const checked = values.checkedEvent == id;
          return {
            // Keep the event info
            ...event,
            checked,
            // Clicking the event
            onClick: () => {
              // Allow unclicking of event
              const newValue = checked ? undefined : id;
              // Set the fields as clicked
              setFieldTouched('checkedEvent');
              // Update the state
              setFieldValue('checkedEvent', newValue);
            },
          };
        })
      }
    />
  )
);
