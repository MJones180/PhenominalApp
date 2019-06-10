
import React from 'react';
import _ from 'lodash';
import Link from 'components/Link';
import styles from './index.css';

export default ({ data }) => (
  <div className={styles.container}>
    {_.map(data, ({ startDate, charities }, index) => (
      <div className={styles.box} key={index}>
        <h5 className={styles.date}> { startDate } </h5>
        <ul className={styles.charities}>
          {_.map(charities, ({ ein, name }, index) => (
            <Link to={`/charities/${ein}`} key={index}>
              <li> {name} </li>
            </Link>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
