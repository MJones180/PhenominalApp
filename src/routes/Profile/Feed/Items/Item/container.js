import React from 'react';
import { timeAgo } from 'utils/time';

// Type information
const types = {
  CHARITY_FOLLOWED: {
    title: 'Charity Followed',
    link: ein => `charities/${ein}`,
  },
  HALO_COMPLETED: {
    title: 'Halo Completed',
  },
  DONATION: {
    title: 'Donation',
    link: ein => `charities/${ein}`,
  },
  CIRCLE_CREATED: {
    title: 'Circle Created',
    link: id => `circles/${id}`,
  },
};

export default Component => (
  ({ createdAt, dots, link, message, type }) => (
    <Component
      date={timeAgo(createdAt)}
      dots={dots || 0}
      link={link ? types[type].link(link) : undefined}
      message={message}
      title={types[type].title}
    />
  )
);
