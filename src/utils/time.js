// =================================
// Moment.js Time Functions
// =================================

import moment from 'moment';

const Relative = (time) => {
  moment.relativeTimeThreshold('ss', 0);
  moment.relativeTimeThreshold('s', 60);
  moment.relativeTimeThreshold('m', 60);
  moment.relativeTimeThreshold('h', 24);
  moment.relativeTimeThreshold('d', 31);
  moment.relativeTimeThreshold('M', 12);
  moment.updateLocale('en', {
    relativeTime: {
      s: num => (`${num} seconds`),
      m: '1 minute',
      mm: num => (`${num} minutes`),
      h: '1 hour',
      hh: '%d hours',
      d: '1 day',
      dd: '%d days',
      M: '1 month',
      MM: '%d months',
      y: '1 year',
      yy: '%d years',
    },
  });
  return moment(time);
};

export const prettifyDate = time => moment(time).format('dddd, MMM D');
export const simplifyDate = time => moment(time).format('MM/DD/YYYY');
export const remaining = time => Relative(time).fromNow(true);
