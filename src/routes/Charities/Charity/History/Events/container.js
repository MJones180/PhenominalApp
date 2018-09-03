import React from 'react';
import EventsEmpty from '../Empty';

export default Component => (
  ({ data }) => (
    // Render the Events if at least one exists
    data[0] ? <Component events={data} /> : <EventsEmpty />
  )
);
