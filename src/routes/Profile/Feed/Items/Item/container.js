import React from 'react';

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
  ({ dots, link, message, type }) => (
    <Component
      dots={dots || 0}
      link={link ? types[type].link(link) : false}
      message={message}
      title={types[type].title}
    />
  )
);
