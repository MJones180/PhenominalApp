import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Cell from '../Cell';
import styles from './index.css';

export default ({ columns, data, rowClick }) => {
  const ClickWrapper = ({ children }) => {
    if (rowClick) {
      return (
        <Link to={rowClick.link(data[rowClick.linkData])} className={styles.row}>
          { children }
        </Link>
      );
    }
    return (
      <div className={styles.row}>
        { children }
      </div>
    );
  };
  return (
    <ClickWrapper>
      {_.map(columns, ({ name, width }, index) => (
        <Cell value={data[name]} width={width} key={index} />
      ))}
    </ClickWrapper>
  );
};
