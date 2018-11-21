import React from 'react';
import _ from 'lodash';
import frag from './frag';

export default (Component) => {
  const RenderComponent = ({ data: { user: { circles, followedCharities } } }) => (
    <Component
      circles={circles}
      circlesCount={circles.length}
      followedCharities={_.map(followedCharities, ({ ein, name }) => ({ name, id: ein }))}
      followedCharitiesCount={followedCharities.length}
    />
  );
  return ({ profileQuery }) => profileQuery(frag, RenderComponent);
};
