import React from 'react';
import _ from 'lodash';
import TableEmpty from './Empty';

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.headerClick = this.headerClick.bind(this);
      this.update = this.update.bind(this);
      // Initial State
      this.state = {
        columns: this.props.columns,
        data: this.props.data,
        filter: undefined,
        order: undefined,
        rowClick: this.props.rowClick,
        uid: this.props.uid,
      };
    }
    // Header field clicked
    headerClick(field) {
      this.setState(({ data, filter, order }) => {
        // The new order to sort the data in
        let newOrder = 'desc';
        // If it is the same field being clicked, flip its sorting order
        if (filter == field) newOrder = (order == 'asc' ? 'desc' : 'asc');
        // Update the state
        return {
          // Sort the data, fall back to the raw_balance in the case of two equal items
          data: _.orderBy(data, [field, this.props.fallbackSort], [newOrder, newOrder]),
          filter: field,
          order: newOrder,
        };
      });
    }
    // Update the state if necessary when the props change
    update() {
      // If the uid is different update the table
      if (this.props.uid != this.state.uid) {
        const { filter, order } = this.state;
        this.setState({
          filter,
          order,
          ...this.props,
        });
      }
    }
    // =======================
    // Render it
    // =======================
    render() {
      // Called every time the component gets new props
      this.update();
      // Render the Table if the user has at least one transaction
      return (
        this.state.data[0] ? <Component {...this.state} headerClick={this.headerClick} /> : <TableEmpty />
      );
    }
  }
);
