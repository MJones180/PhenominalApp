import React from 'react';
import { Redirect } from 'react-router-dom';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default Component => (
  ({ match }) => {
    const RenderComponent = ({ data: { circle } }) => (
      // Verify the circle exists
      circle ? <Component id={circle.id} name={circle.name} /> : <Redirect to="/profile" />
    );
    return Query({
      query,
      variables: {
        id: match.params.circleID,
      },
      Component: RenderComponent,
    });
  }
);
