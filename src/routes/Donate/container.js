import React from 'react';
import _ from 'lodash';
import Query from 'utils/graphql/query';
import query from './query.graphql';

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
        const { eventsCurrent, currentUserBalance } = this.props.data;
        // Format all of the events
        const events = _.map(eventsCurrent, ({ id, charity }) => ({
          id,
          ...charity,
        }));
        // Filter the passed event, first element's id
        const checkedEvent = _.filter(eventsCurrent, ({ id }) => id == match.params.eventID)[0];
        // Return the formatted data
        return ({
          balance: currentUserBalance,
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

    return Query({
      query,
      Component: RenderComponent,
    });
  }
);
