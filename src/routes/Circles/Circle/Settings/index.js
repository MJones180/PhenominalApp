import React from 'react';
import Container from './container';
import Disband from './Disband';
import UpdateInfo from './UpdateInfo';
import styles from './index.css';

export default Container(({ id, description, open }) => (
  <section className={styles.container}>
    <UpdateInfo id={id} description={description} open={open} />
    <Disband id={id} />
  </section>
));
