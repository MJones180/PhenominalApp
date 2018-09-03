import React from 'react';
import Input from '../Input';
import Presets from '../Presets';
import styles from './index.css';

export default props => (
  <div className={styles.container}>
    <Input {...props} />
    <Presets {...props} />
  </div>
);
