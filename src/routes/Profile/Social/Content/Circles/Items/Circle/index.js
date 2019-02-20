import React from 'react';
import Link from 'components/Link';
import styles from './index.css';

export default ({ id, name }) => (
  <Link className={styles.link} to={`/circles/${id}`}>
    <div className={styles.circle}>
      <h4 className={styles.name}>
        {name}
      </h4>
    </div>
  </Link>
);
