// =================================
// Browser Local Storage Access
// =================================

const AUTH = 'auth';
const CHARITY_AUTH = 'charity_auth';
const HIDE_LEGAL_NOTICE = 'hide_legal_notice';

const get = key => localStorage.getItem(key);
const remove = key => localStorage.removeItem(key);
const set = (key, val) => localStorage.setItem(key, val);

module.exports = {
  get: {
    auth: () => get(AUTH),
    charityAuth: () => get(CHARITY_AUTH),
    hideLegalNotice: () => get(HIDE_LEGAL_NOTICE),
  },
  remove: {
    auth: () => remove(AUTH),
    charityAuth: () => remove(CHARITY_AUTH),
  },
  set: {
    auth: data => set(AUTH, data),
    charityAuth: data => set(CHARITY_AUTH, data),
    hideLegalNotice: () => set(HIDE_LEGAL_NOTICE, true),
  },
};
