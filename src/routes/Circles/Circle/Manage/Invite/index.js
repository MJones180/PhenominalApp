import React from 'react';
import Container from './container';
import Input from './Input';
import Results from './Results';
import styles from './index.css';

export default Container(({ id, results, ...searchProps }) => (
  <div className={styles.container}>
    <div className={styles.search}>
      <h3 className={`general ${styles.title}`}>
        Invite
      </h3>
      <Input id={id} {...searchProps} />
    </div>
    <Results id={id} data={results} />
  </div>
));
