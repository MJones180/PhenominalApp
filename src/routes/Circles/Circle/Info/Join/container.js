import React from 'react';
import { isAuth } from 'utils/auth/user';
import Mutation from 'utils/graphql/mutation';
import Query from 'utils/graphql/query';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';
import query from './query.graphql';

export default (Component) => {
  // If there is no authUser, redirect to signin on join click
  if (!isAuth()) return () => <Component text="Join" button={{ to: '/signin' }} />;
  return ({ id }) => {
    class RenderComponent extends React.Component {
      constructor(props) {
        super(props);
        // Bind `this` to all class functions, makes them callable
        this.click = this.click.bind(this);
        // Check if the user is already a member of the Circle
        const alreadyMember = this.props.data.currentUser.circles[0];
        // Check if the user has a pending request to join the Circle
        const pendingJoinRequest = this.props.data.currentUser.circleJoinRequests[0];
        // Initial State
        this.state = {
          alreadyMember,
          pendingJoinRequest,
          onClick: this.click,
        };
      }
      // Button click to join/leave the circle
      click() {
        // Do nothing on click
        this.setState({ onClick: () => {} });
        // Mutation variables
        const variables = { id };
        let alertMessage = 'Joining the Circle.';
        // The user is already a member
        if (this.state.alreadyMember) {
          // Leave the Circle
          variables.leave = true;
          // Update the alert message
          alertMessage = 'Leaving the Circle.';
        }
        const alert = createAlert(alertMessage);
        // Update the Circle relation
        Mutation({
          mutation,
          variables,
          success: ({ setCircleRelation }) => {
            // Check what the new Circle relation is
            const JOIN = setCircleRelation == 'JOIN';
            const PENDING = setCircleRelation == 'PENDING';
            // Alert message
            let updatedText = 'Circle left.';
            if (JOIN) updatedText = 'Circle joined.';
            if (PENDING) updatedText = 'Circle join request sent.';
            alert.success(updatedText);
            // Enable the button and update the current Circle relation
            this.setState({
              alreadyMember: JOIN,
              pendingJoinRequest: PENDING,
              onClick: this.click,
            });
          },
          error: () => alert.error(),
        });
      }
      render() {
        const { alreadyMember, pendingJoinRequest, onClick } = this.state;
        // Default button text
        let text = 'Join';
        // If the user is already a member
        if (alreadyMember) text = 'Leave';
        // If the user has a pending join request
        if (pendingJoinRequest) text = 'Pending';
        // Disable button if the join request is pending
        return <Component text={text} button={{ onClick, disable: pendingJoinRequest }} />;
      }
    }
    // Grab the current Circle relation state
    return <Query query={query} variables={{ id }} Component={RenderComponent} />;
  };
};
