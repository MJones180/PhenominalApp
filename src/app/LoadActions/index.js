import _ from 'lodash';
import { simple } from 'utils/graphql/query';
import { currentUser } from 'utils/auth/user';
import createAlert from 'components/Alert';
import circleInvitesQuery from './circleInvites.graphql';
import circleRequestsQuery from './circleRequests.graphql';

// Grab all of the Circles the user is invited to
const circleInvites = async () => (
  simple({ query: circleInvitesQuery })
    .then(({ data }) => {
      // Check if the user has at least one invite
      if (data.currentUser.circleInvites[0]) {
        // If there is at least one invite, alert the user
        createAlert().special('You have an invite to join a Circle!');
      }
    })
);

// Grab all of the user's Circles' join requests
const circleRequests = async () => (
  simple({ query: circleRequestsQuery })
    .then(({ data }) => {
      // The user's Circles
      const circles = data.currentUser.circlesOwned;
      // Check if the user has at least one Circle
      if (circles[0]) {
        // Grab the join requests from each of the Circles
        const requests = _.flatMap(circles, data => data.joinRequests);
        // If there is at least one request, alert the user
        if (requests[0]) createAlert().special('One of your Circles has a join request!');
      }
    })
);

// Connect to the state to listen for auth changes
export default currentUser(({ user }) => {
  // Ensure there is an authUser
  if (user.id) {
    // Check for Circle invites
    circleInvites();
    // Check for Circle join requests
    circleRequests();
  }
  return false;
});
