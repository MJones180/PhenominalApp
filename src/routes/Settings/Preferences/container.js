import React from 'react';
import frag from './frag';

export default (Component) => {
  const RenderComponent = ({ data: { currentUser: { preferences } } }) => (
    <Component {...preferences} />
  );
  return ({ settingsQuery }) => settingsQuery(frag, RenderComponent);
};
