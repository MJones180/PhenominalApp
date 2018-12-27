import React from 'react';
import EventsEmpty from '../Empty';

export default Component => (
  events => (
    // Render the Events if at least one exists
    events[0] ? <Component events={events} /> : <EventsEmpty />
  )
);
