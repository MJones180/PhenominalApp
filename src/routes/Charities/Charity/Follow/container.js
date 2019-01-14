import React from 'react';
import { isAuth } from 'utils/auth/user';
import Mutation from 'utils/graphql/mutation';
import Query from 'utils/graphql/query';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';
import query from './query.graphql';

export default (Component) => {
  // If there is no authUser, redirect to signin on follow click
  if (!isAuth()) return () => <Component charityFollowed={false} click={{ to: '/signin' }} />;
  return ({ ein }) => {
    class RenderComponent extends React.Component {
      constructor(props) {
        super(props);
        // Bind `this` to all class functions, makes them callable
        this.click = this.click.bind(this);
        // See if the charity is already being followed
        const charityFollowed = !!this.props.data.currentUser.followedCharities[0];
        // Initial State
        this.state = {
          charityFollowed,
          onClick: this.click,
        };
      }
      // Button click to follow/unfollow the charity
      click() {
        const { charityFollowed } = this.state;
        this.setState({
          // Flip the follow state
          charityFollowed: !charityFollowed,
          // Do nothing on click
          onClick: () => {},
        });
        const alert = createAlert(`${charityFollowed ? 'Unfollowing' : 'Following'} the charity.`);
        // Update the follow state
        Mutation({
          mutation,
          variables: {
            ein,
            // Should the charity be unfollowed (follow by default)
            unfollow: charityFollowed,
          },
          success: () => {
            alert.success(`${charityFollowed ? 'Unfollowed' : 'Followed'} the charity.`);
            // Enable the state to be flipped again on click
            this.setState({
              onClick: this.click,
            });
          },
          error: () => alert.error(),
        });
      }
      render() {
        return (
          <Component
            charityFollowed={this.state.charityFollowed}
            click={{ onClick: this.state.onClick }}
          />
        );
      }
    }
    // Grab the current follow state
    return <Query query={query} variables={{ ein }} Component={RenderComponent} />;
  };
};
