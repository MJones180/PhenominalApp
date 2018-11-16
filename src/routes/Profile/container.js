import React from 'react';
import { Redirect } from 'react-router-dom';
import { currentUser, isAuth } from 'utils/auth/user';
import query from 'utils/graphql/query';

// Connect to the user state in Redux
export default Component => currentUser(
  ({ match, user: authUser }) => {
    // Bool for whether the user is viewing their own profile
    let ownProfile = true;
    // Grab the requested username from the URL params
    const { username: requestedUser } = match.params;
    // The username of the profile being viewed
    let profileUsername = requestedUser;
    // User is not viewing their own profile
    if (requestedUser && (requestedUser != authUser.username)) ownProfile = false;
    // No profile requested
    if (!requestedUser) {
      // No authUser, redirect to signin
      if (!isAuth()) return <Redirect to="/signin" />;
      // Set the username from the auth state
      profileUsername = authUser.username;
    }
    // The root query
    const profileQuery = (content, Component) => (
      query({
        query: `query($username: String) { ${content} }`,
        variables: {
          username: profileUsername,
        },
        Component,
      })
    );
    // Render the component
    return <Component ownProfile={ownProfile} profileQuery={profileQuery} />;
  }
);
