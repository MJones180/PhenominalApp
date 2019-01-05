import React from 'react';
import Button from 'components/Button';
import { BasicInput } from 'components/Input';
import Container from './container';
import Items from './Items';
import styles from './index.css';

export default Container(data => (
  <div className={styles.container}>
    <div className={styles.firstRow}>
      <h3 className="general">
        Circles
      </h3>
      <Items {...data} />
    </div>
    <div className={styles.actions}>
      <Button className={styles.create}>
        Create Circle
      </Button>
      <div className={styles.search}>
        <BasicInput className={styles.searchInput} />
        <Button className={styles.searchButton}>
          Search
        </Button>
      </div>
    </div>
  </div>
));
