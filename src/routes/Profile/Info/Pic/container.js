import React from 'react';
import Loops from 'utils/loops';

export default Component => (
  ({ loopCount }) => <Component {...Loops(loopCount)} />
);
