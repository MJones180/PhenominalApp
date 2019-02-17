import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

export default ({ children, link, title }) => (
  <Link to={link} className={styles.container}>
    <div className={styles.content}>
      {children}
    </div>
    <div className={styles.title}>
      <h3 className="general"> {title} </h3>
    </div>
  </Link>
);
