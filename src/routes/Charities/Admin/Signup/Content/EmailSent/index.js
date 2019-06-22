import React from 'react';
import styles from './index.css';

export default ({ email }) => (
  <h5 className={styles.text}>
    A confirmation email has been sent to <span>{ email }</span>. Upon clicking on the link, the charity will be created and you will be signed in.
  </h5>
);
