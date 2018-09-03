import React from 'react';
import Container from './container';
import Item from './Item';
import PieChart from './PieChart';
import styles from './index.css';

export default Container(({ p, a, f, o }) => ([
  <PieChart
    program={p}
    administrative={a}
    fundraising={f}
    other={o}
    key="pieChart"
  />,
  <div className={styles.centerLegend} key="legend">
    <ul className={styles.legend}>
      <Item className={styles.program} name="Program" value={p} />
      <Item className={styles.administrative} name="Administrative" value={a} />
      <Item className={styles.fundraising} name="Fundraising" value={f} />
      <Item className={styles.other} name="Other" value={o} />
    </ul>
  </div>,
]));
