import React from 'react';
import Button from 'components/Button';
import { BasicInput } from 'components/Input';
import styles from './index.css';

export default ({ loading, searchValue, fetchUsers, inputChange }) => (
  <div className={styles.container}>
    <BasicInput
      className={styles.input}
      label="Username"
      name="usernameSearch"
      onChange={inputChange}
      value={searchValue}
    />
    <Button className={styles.button} onClick={fetchUsers} disable={loading}>
      Search
    </Button>
  </div>
);
