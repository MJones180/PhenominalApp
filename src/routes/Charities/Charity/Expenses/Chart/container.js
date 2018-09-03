import React from 'react';
import _ from 'lodash';
import Incomplete from './Incomplete';

export default Component => (({ p, a, f, o }) => (
  (_.isNull(p) || _.isNull(a) || _.isNull(f) || _.isNull(o)) ?
    <Incomplete /> :
    <Component p={p} a={a} f={f} o={o} />
));
