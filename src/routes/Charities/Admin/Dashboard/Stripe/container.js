import React from 'react';
import queryString from 'query-string';
import { websiteURL } from 'utils/endpoints';
import { stripeClientID } from 'utils/keys';
import { get } from 'utils/storage';
import Mutation from 'utils/graphql/mutation';
import Query from 'utils/graphql/query';
import mutation from './mutation.graphql';
import query from './query.graphql';

export default Component => (
  ({ ein }) => {
    class RenderComponent extends React.Component {
      constructor(props) {
        super(props);
        // Bind `this` to all class functions, makes them callable
        this.onClick = this.onClick.bind(this);
        // Initial State
        const { connectedAccountID, createdAt, email, name } = this.props.data.charity;
        this.state = {
          connectedAccountID,
          createdAt,
          disabled: false,
          email,
          name,
          onClick: this.onClick,
        };
      }
      onClick() {
        // Not yet connected
        if (!this.state.connectedAccountID) {
          // Params to pass to Stripe
          const params = {
            // Route to redirect to after Stripe completion
            redirect_uri: `${websiteURL}/charities/admin/stripe/cb`,
            client_id: stripeClientID,
            // Secret to prevent against CSRF attacks
            state: this.state.createdAt,
            // Prefilled values
            'stripe_user[business_name]': this.state.name,
            'stripe_user[business_type]': 'company',
            'stripe_user[email]': this.state.email,
          };
            // Connect Stripe Express account
          window.location.href = `https://connect.stripe.com/express/oauth/authorize?${queryString.stringify(params)}`;
        } else {
          Mutation({
            mutation,
            variables: {
              // Charity auth token in cookie
              token: get.charityAuth(),
            },
            success: ({ stripeAccountView }) => {
              window.location.href = stripeAccountView;
            },
            error: () => {
            },
          });
        }
        // Disable continuous button clicks
        this.setState({
          disabled: true,
        });
      }
      render() {
        return <Component connected={this.state.connectedAccountID} disabled={this.state.disabled} onClick={this.state.onClick} />;
      }
    }
    return Query({
      query,
      variables: { ein },
      Component: RenderComponent,
    });
  }
);
