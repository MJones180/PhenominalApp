import React from 'react';
import _ from 'lodash';

export default Component => (
  ({ columns, filter, headerClick, order }) => {
    // Format each element in the header
    const formatted = _.map(columns, ({ key, title, width }) => ({
      // Check if an arrow needs to be displayed
      arrowDown: order == 'asc' && filter == key,
      arrowUp: order == 'desc' && filter == key,
      // Onclick action
      click: () => headerClick(key),
      // Column title, default to capitalized key
      value: title || _.upperFirst(key),
      // Width of the cell
      width,
    }));
    return <Component columns={formatted} />;
  }
);
