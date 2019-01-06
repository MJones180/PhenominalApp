import React from 'react';
import Button from 'components/Button';
import { BasicInput } from 'components/Input';
import styles from './index.css';

export default ({ loading, searchValue, fetchCircles, inputChange }) => (
  <div className={styles.container}>
    <BasicInput
      className={styles.input}
      label="Circle Name"
      name="circleSearch"
      onChange={inputChange}
      value={searchValue}
    />
    <Button className={styles.button} onClick={fetchCircles} disable={loading}>
      Search
    </Button>
  </div>
);
