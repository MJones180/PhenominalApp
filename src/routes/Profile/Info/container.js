import React from 'react';
import { writtenDateFull } from 'utils/time';
import { image } from 'utils/endpoints';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data }) => {
    const { createdAt, ...remainingData } = data.user;
    // Put the date in a readable format
    const created = writtenDateFull(createdAt);
    // Grab the picture if the user has one
    const picture = data.user.picture ? image(data.user.picture) : image('assets/DefaultUserPicture.png');
    return (
      // Render the Component with the unnested props
      <Component
        created={created}
        {...remainingData}
        loops={data.userLoops}
        dots={data.userDots}
        picture={picture}
      />
    );
  };
  return username => <Query query={query} variables={username} Component={RenderComponent} />;
};
