import React from 'react';
import _ from 'lodash';

export default Component => (
  ({ columns, filter, headerClick, order }) => {
    // Format each element in the header
    const formatted = _.map(columns, ({ disableSorting, field, key, title, width }) => ({
      // Check if an arrow needs to be displayed, ensure sorting is enabled
      arrowDown: order == 'asc' && !disableSorting && filter == (key || field),
      arrowUp: order == 'desc' && !disableSorting && filter == (key || field),
      // Onclick action, ensure sorting is enabled
      click: () => (!disableSorting && headerClick(key || field)),
      // Column title, default to capitalized field
      value: title || _.upperFirst(field),
      // Width of the cell
      width,
    }));
    return <Component columns={formatted} />;
  }
);
