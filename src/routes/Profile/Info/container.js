import React from 'react';
import { writtenDateFull } from 'utils/time';
import Loops from 'utils/loops';
import { comma } from 'utils/number';
import frag from './frag';

export default Component => (
  ({ profileQuery }) => {
    const RenderComponent = ({ data }) => {
      const { createdAt, ...remainingData } = data.user;
      // Put the date in a readable format
      const created = writtenDateFull(createdAt);
      // Stage information pertaining to the loops
      // const loops = Loops(data.userLoops);
      const loops = Loops(3141);
      // Format the dots
      // const dots = comma(data.userDots);
      const dots = comma(31415926);
      return (
      // Render the Component with the unnested props
        <Component
          created={created}
          {...remainingData}
          loops={loops}
          dots={dots}
        />
      );
    };
    // Grab all necessary data
    return profileQuery(frag, RenderComponent);
  }
);
