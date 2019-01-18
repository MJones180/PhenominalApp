import React from 'react';
import _ from 'lodash';

export default Component => (
  ({ columns, filter, headerClick, order }) => {
    // Format each element in the header
    const formatted = _.map(columns, ({ cellStyle, disableSorting, field, key, title }) => ({
      // Check if an arrow needs to be displayed, ensure sorting is enabled
      arrowDown: order == 'asc' && !disableSorting && filter == (key || field),
      arrowUp: order == 'desc' && !disableSorting && filter == (key || field),
      // Style of the cell
      cellStyle,
      // Onclick action, ensure sorting is enabled
      click: () => (!disableSorting && headerClick(key || field)),
      // Should sorting be disabled
      disableSorting,
      // Column title, default to capitalized field
      value: title || _.upperFirst(field),
    }));
    return <Component columns={formatted} />;
  }
);
