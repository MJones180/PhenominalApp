import React from 'react';
import _ from 'lodash';
import Container from './container';
import styles from './index.css';

export default Container(({ columns }) => (
  <div className={styles.header}>
    {_.map(columns, ({ arrowDown, arrowUp, cellStyle, click, disableSorting, value }, index) => (
      <div className={`${styles.cell} ${disableSorting && styles.disabled} ${cellStyle}`} onClick={click} key={index}>
        <p>{value}</p>
        { arrowDown && <div className={styles.arrowDown} />}
        { arrowUp && <div className={styles.arrowUp} />}
      </div>
    ))}
  </div>
));
