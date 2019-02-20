import React from 'react';
import { image } from 'utils/endpoints';
import Link from 'components/Link';
import styles from './index.css';

export default ({ ein, name }) => (
  <Link to={`/charities/${ein}`} className={styles.container}>
    <img
      src={image(`charities/logos/${ein}.png`)}
      alt={`${name} Logo`}
      className={styles.logo}
    />
  </Link>
);
