import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

const Transactions = () => (
  <Link to="/transactions" className="general">
    transactions page
  </Link>
);

export default () => (
  <p className={`large ${styles.text}`}>
    A maximum of 10 transactions are being displayed, to view them all go to your <Transactions />.
  </p>
);
