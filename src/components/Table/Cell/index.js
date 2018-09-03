import React from 'react';
import styles from './index.css';

export default ({ children, click, value, width }) => (
  <div className={`${styles.cell} ${width}`} onClick={click}>
    <p>
      {value}
    </p>
    {children}
  </div>
);
