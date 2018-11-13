import React from 'react';
import { Redirect } from 'react-router-dom';
import { currentUser, isAuth } from 'utils/auth/user';
import query from 'utils/graphql/query';

// Connect to the user state in Redux
export default Component => currentUser(
  ({ match, user }) => {
    // Bool for whether the user is viewing their own profile
    let ownProfile = true;
    // Root depends on who is viewing the profile
    // Default is a user viewing their own profile
    let queryRoot = 'currentUser';
    // The root query
    const profileQuery = (content, Component) => (
      query({
        query: `query { ${queryRoot} { ${content} } }`,
        Component,
      })
    );
    // Grab the username from the URL params
    const { username } = match.params;
    // If a username is passed and its not the authUsers
    if (username && (username != user.username)) {
      // Not the authUser's profile
      ownProfile = false;
      // Query to view other profile
      queryRoot = `user(where: {username: "${username}"} )`;
    }
    // No profile requested and no authUser, redirect to signin
    if (!user && !isAuth()) return <Redirect to="/signin" />;
    // Render the component
    return <Component ownProfile={ownProfile} profileQuery={profileQuery} />;
  }
);
