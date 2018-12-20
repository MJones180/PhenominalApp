import React from 'react';
import frag from './frag';

export default (Component) => {
  const RenderComponent = ({ data: { currentUser } }) => (
    <Component {...currentUser} />
  );
  return ({ settingsQuery }) => settingsQuery(frag, RenderComponent);
};
