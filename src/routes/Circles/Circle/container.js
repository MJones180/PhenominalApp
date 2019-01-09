import React from 'react';
import { Redirect } from 'react-router-dom';
import { isAuth } from 'utils/auth/user';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default Component => (
  ({ match }) => {
    const RenderComponent = ({ data: { circle } }) => {
      // Circle does not exist
      if (!circle) return <Redirect to="/profile" />;
      // Check if the owner of the Circle is the authUser
      const isOwner = circle.owner.id == isAuth();
      // Render the Circle
      return <Component id={circle.id} isOwner={isOwner} name={circle.name} />;
    };
    return Query({
      query,
      variables: {
        id: match.params.circleID,
      },
      Component: RenderComponent,
    });
  }
);
