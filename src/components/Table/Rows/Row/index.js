import React from 'react';
import _ from 'lodash';
import Cell from './Cell';
import styles from './index.css';

export default ({ columns, data, fieldLink }) => (
  <div className={styles.row}>
    {_.map(columns, ({ cellContent, key, width }, index) => {
      // Props to be passed to the cell
      const props = {
        // Unique key
        key: index,
        // Check if a render component was passed, default to a paragraph
        value: cellContent ? cellContent(data[key]) : <p>{data[key]}</p>,
        // Width of each cell
        width,
      };
      // Check if there is a link
      if (fieldLink) {
        const { fields, address } = fieldLink;
        // Check if the field should use the link
        if (fields == '*' || _.includes(fields, key)) props.link = address(data);
      }
      // Render the cell
      return <Cell {...props} />;
    })}
  </div>
);
