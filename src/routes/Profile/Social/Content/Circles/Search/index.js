import React from 'react';
import Container from './container';
import Input from './Input';
import Results from './Results';
import styles from './index.css';

export default Container(({ results, ...searchProps }) => (
  <div>
    <div className={styles.search}>
      <h3 className={`general ${styles.title}`}>
        Search Circles
      </h3>
      <Input {...searchProps} />
    </div>
    <Results data={results} />
  </div>
));
