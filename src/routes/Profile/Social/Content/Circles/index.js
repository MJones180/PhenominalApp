import React from 'react';
import _ from 'lodash';
import Container from './container';
import Invites from './Invites';
import Items from './Items';
import Search from './Search';

export default Container(({ data, ownProfile }) => (
  <div>
    <Items circles={_.get(data, 'user.circles', {})} ownProfile={ownProfile} />
    { ownProfile && <Search /> }
    { ownProfile && <Invites invites={_.get(data, 'currentUser.circleInvites')} /> }
  </div>
));
