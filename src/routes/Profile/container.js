import React from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import { currentUser, isAuth } from 'utils/auth/user';

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
    if (requestedUser && (_.toLower(requestedUser) != _.toLower(authUser.username || ''))) ownProfile = false;
    // No profile requested
    if (!requestedUser) {
      // No authUser, redirect to signin
      if (!isAuth()) return <Redirect to="/signin" />;
      // Set the username from the auth state
      profileUsername = authUser.username;
    }
    // Render the component
    return <Component ownProfile={ownProfile} username={profileUsername} />;
  }
);
