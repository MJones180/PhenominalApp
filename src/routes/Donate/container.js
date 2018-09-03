import React from 'react';
import _ from 'lodash';
import gql from 'graphql-tag';
import query from 'utils/graphql/query';

export default Component => (
  ({ match }) => {
    class RenderComponent extends React.Component {
      constructor(props) {
        super(props);
        // Bind `this` to all class functions, makes them callable
        this.setParentState = this.setParentState.bind(this);
        this.formatData = this.formatData.bind(this);
        // Initial State
        this.state = {
          processing: false,
          results: null,
        };
      }
      setParentState(obj) {
        this.setState(pastState => ({
          ...pastState,
          ...obj,
        }));
      }
      formatData() {
        // Grab the passed data
        const { eventsCurrent, grabUserBalance } = this.props.data;
        // Format all of the events
        const events = _.map(eventsCurrent, ({ id, charity, specialFundraiser }) => ({
          id,
          name: charity ? charity.name : specialFundraiser.name,
        }));
        // Filter the passed event, first element's id
        const checkedEvent = _.filter(eventsCurrent, ({ id }) => id == match.params.eventID)[0];
        // Return the formatted data
        return ({
          balance: grabUserBalance.balance,
          checkedEvent: checkedEvent && checkedEvent.id,
          events,
        });
      }
      render() {
        return (
          <Component
            data={this.formatData()}
            setParentState={this.setParentState}
            {...this.state}
          />
        );
      }
    }

    return query({
      query: gql`
        query {
          eventsCurrent(
            orderBy: endDate_ASC
          ) {
            id
            charity {
              name
            }
            specialFundraiser {
              name
            }
          }
          grabUserBalance {
            balance
          }
        }
      `,
      Component: RenderComponent,
    });
  }
);
