import React from 'react';
import styles from './index.css';

export default ({ value, title }) => (
  <p className={`${styles.stat} large`}>
    { value }
    <span> { title }</span>
  </p>
);
