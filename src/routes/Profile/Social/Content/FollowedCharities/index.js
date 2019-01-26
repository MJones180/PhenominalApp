import React from 'react';
import _ from 'lodash';
import Container from './container';
import Charities from './Charities';

export default Container(({ data }) => (
  <div>
    <h3 className="general">
      Followed Charities
    </h3>
    <Charities data={_.get(data, 'user.followedCharities', {})} />
  </div>
));
