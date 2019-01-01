import React from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import { currentUser, isAuth } from 'utils/auth/user';
import Query from 'utils/graphql/query';
import query from './query.graphql';

// Connect to the user state in Redux
export default Component => currentUser(
  ({ match, user: authUser }) => {
    // Bool for whether the user is viewing their own profile
    let ownProfile = true;
    // Grab the requested username from the URL params
    const { username: requestedUser } = match.params;
    // The username of the profile being viewed
    let profileUsername = requestedUser;
    // Component to render the profile
    const renderProfile = () => <Component ownProfile={ownProfile} username={profileUsername} />;
    // Username from the URL params does not match that of the authUser
    if (requestedUser && (_.toLower(requestedUser) != _.toLower(authUser.username || ''))) {
      // User is not viewing their own profile
      ownProfile = false;
      // Check if the requested user has a public profile
      const RenderComponent = ({ data: { user } }) => {
        // The username exists and the user's profile is public
        if (user && user.preferences.publicProfile) return renderProfile();
        // Redirect to the authUser's profile (or signin if no authUser)
        return <Redirect to="/profile" />;
      };
      // Grab the requested user's preferences
      return <Query query={query} variables={{ username: requestedUser }} Component={RenderComponent} />;
    }
    // No profile was requested in the URL params
    if (!requestedUser) {
      // No authUser, redirect to signin
      if (!isAuth()) return <Redirect to="/signin" />;
      // Set the username from the auth state
      profileUsername = authUser.username;
    }
    // Render the profile
    return renderProfile();
  }
);
