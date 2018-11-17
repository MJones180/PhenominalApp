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

export const writtenDate = time => moment(time).utc().format('dddd, MMM D');
export const writtenDateFull = time => moment(time).utc().format('dddd, MMM D, YYYY');
export const compactDate = time => moment(time).utc().format('MM/DD/YYYY');
export const remaining = time => Relative(time).utc().fromNow(true);
