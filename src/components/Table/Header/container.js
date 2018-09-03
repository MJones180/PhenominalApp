import React from 'react';
import _ from 'lodash';

export default Component => (
  ({ columns, filter, headerClick, order }) => {
    // Format each element in the header
    const formatted = _.map(columns, ({ field, name, width }) => ({
      // Check if an arrow needs to be displayed
      arrowDown: order == 'asc' && filter == field,
      arrowUp: order == 'desc' && filter == field,
      // Onclick action
      click: () => headerClick(field),
      // Capitalized column name
      value: _.upperFirst(name),
      // Width of the cell
      width,
    }));
    return <Component columns={formatted} />;
  }
);
