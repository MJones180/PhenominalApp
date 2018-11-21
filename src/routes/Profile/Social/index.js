import React from 'react';
import Donate from './Donate';
import Tabs from './Tabs';
import Container from './container';
import styles from './index.css';

export default Container(props => (
  <section className={styles.container}>
    <Donate />
    <Tabs {...props} />
  </section>
));
