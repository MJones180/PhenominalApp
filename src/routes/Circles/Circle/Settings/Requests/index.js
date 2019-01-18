import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

export default () => (
  <Link className={styles.box} to="/profile">
    Outer
    <div className={styles.box2} onClick={() => { console.log('Inner Box'); }}>
      Inner
    </div>
  </Link>
);
