// =================================
// Moment.js Time Functions
// =================================

import moment from 'moment';

// Relative time settings
moment.relativeTimeThreshold('ss', 0);
moment.relativeTimeThreshold('s', 60);
moment.relativeTimeThreshold('m', 60);
moment.relativeTimeThreshold('h', 24);
moment.relativeTimeThreshold('d', 31);
moment.relativeTimeThreshold('M', 12);
moment.updateLocale('en', {
  relativeTime: {
    m: '1 minute',
    h: '1 hour',
    d: '1 day',
    M: '1 month',
    y: '1 year',
  },
});

export const compactDate = time => moment(time).utc().format('MM/DD/YYYY');
export const remaining = time => moment(time).utc().fromNow(true);
export const timeAgo = time => moment(time).calendar();
export const writtenDate = time => moment(time).utc().format('dddd, MMM D');
export const writtenDateFull = time => moment(time).utc().format('dddd, MMM D, YYYY');
