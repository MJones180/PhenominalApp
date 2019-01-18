import React from 'react';
import _ from 'lodash';
import Cell from './Cell';
import styles from './index.css';

export default ({ columns, data, fieldLink }) => (
  <div className={styles.row}>
    {_.map(columns, ({ cellContent, field, key, cellStyle }, index) => {
      // Props to be passed to the cell
      const props = {
        // Unique key
        key: index,
        // Check if a render component was passed, default to a paragraph
        value: cellContent ? cellContent(data[key || field]) : <p>{data[key || field]}</p>,
        // Style of each cell
        cellStyle,
      };
      // Check if there is a link
      if (fieldLink) {
        const { fields, address } = fieldLink;
        // Check if the field should use the link
        if (fields == '*' || _.includes(fields, field)) props.link = address(data);
      }
      // Render the cell
      return <Cell {...props} />;
    })}
  </div>
);
