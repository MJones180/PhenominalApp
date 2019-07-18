import React from 'react';
import { Redirect } from 'react-router-dom';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default Component => (
  ({ match }) => {
    const RenderComponent = ({ data: { charity } }) => (
      // Verify the charity exists
      (charity && charity.verified) ? <Component ein={charity.ein} name={charity.name} /> : <Redirect to="/charities" />
    );
    return Query({
      query,
      variables: {
        ein: match.params.charityEIN,
      },
      Component: RenderComponent,
    });
  }
);
