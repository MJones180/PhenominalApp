import React from 'react';
import _ from 'lodash';
import Container from './container';
import Cell from '../Cell';
import styles from './index.css';

export default Container(({ columns }) => (
  <div className={styles.header}>
    {_.map(columns, ({ arrowDown, arrowUp, click, value, width }, index) => (
      <Cell value={value} click={click} width={width} key={index}>
        { arrowDown && <div className={styles.arrowDown} />}
        { arrowUp && <div className={styles.arrowUp} />}
      </Cell>
    ))}
  </div>
));
