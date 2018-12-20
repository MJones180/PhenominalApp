import React from 'react';
import query from 'utils/graphql/query';

export default Component => (
  () => {
    // Default settings query
    const settingsQuery = (content, Component) => (
      query({
        query: `query { currentUser { ${content} } }`,
        Component,
      })
    );
    // Render the component
    return <Component settingsQuery={settingsQuery} />;
  }
);
