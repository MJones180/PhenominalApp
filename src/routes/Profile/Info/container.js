import React from 'react';
import { writtenDateFull } from 'utils/time';
import Loops from 'utils/loops';
import { image } from 'utils/endpoints';
import { comma } from 'utils/number';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
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
    // Grab the picture if the user has one
    const picture = data.user.picture ? image(data.user.picture) : image('assets/Random/DefaultUserPicture.png');
    return (
      // Render the Component with the unnested props
      <Component
        created={created}
        {...remainingData}
        loops={loops}
        dots={dots}
        picture={picture}
      />
    );
  };
  return username => <Query query={query} variables={username} Component={RenderComponent} />;
};
