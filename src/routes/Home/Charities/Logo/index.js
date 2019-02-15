import React from 'react';
import { Link } from 'react-router-dom';
import { image } from 'utils/endpoints';
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
