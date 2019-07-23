import React from 'react';
import { image } from 'utils/endpoints';
import Link from 'components/Link';
import styles from './index.css';

export default ({ ein, name, route }) => (
  <Link to={`/charities/${ein}`} className={styles.container}>
    <img
      src={image(`assets/Home/${route}.png`)}
      alt={`${name} Logo`}
      className={styles.logo}
    />
  </Link>
);
