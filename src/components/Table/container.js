/*
NAME
  Table [Component]
USAGE
  return <Table {...props} />
PROPS
  - columns: [object] table's column information
    - cellContent: [function(cellValue)] render component
    - key: [string] name of key in data
    - title: [string] title of the column
    - width: [string] css style for width of column
  - data: [object] data for the table, contains keys prefixed with 'SORT_' for sorting
  - defaultSort: [string] default field for sorting
  - emptyMessage: [string] message to be displayed when the table is empty
  - fieldLink: [object] link wrapper for cells on click
    - address: [function(data)] address to route to
    - fields: [array[string] or string] fields to apply link to, or '*' for all fields
  - uid: [string] when to trigger a rerender
NOTES
  - cellContent will default to `val => <p> {val} </p>`
  - If a column's title is not set, the capitalized key will be used
*/

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
        data: this.props.data,
        filter: undefined,
        order: undefined,
        uid: this.props.uid,
      };
    }
    // Header field clicked
    headerClick(field) {
      this.setState(({ data, filter: pastFilter, order: pastOrder }) => {
        // Default sorting info
        let order = 'asc';
        let filter = field;
        // Same field has been clicked
        if (pastFilter == field) {
          // If order is 'asc', switch to 'desc'
          if (pastOrder == 'asc') order = 'desc';
          // Order is 'desc', turn off sorting
          else {
            order = undefined;
            filter = undefined;
          }
        }
        // Check if a SORT_ field has been added
        const sort = data[0][`SORT_${filter}`] ? `SORT_${filter}` : filter;
        // Update the state
        return {
          // Sort the data, fall back to the defaultSort in the case of two equal items
          data: _.orderBy(data, [sort, this.props.defaultSort], [order, order || 'desc']),
          filter,
          order,
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
      // Render the empty table text if there is no data
      if (!this.state.data[0]) return <TableEmpty message={this.props.emptyMessage} />;
      return <Component {...this.props} {...this.state} headerClick={this.headerClick} />;
    }
  }
);
