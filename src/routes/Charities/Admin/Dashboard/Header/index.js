import React from 'react';
import Container from './container';
import Item from './Item';
import styles from './index.css';

export default Container(({ createdAt, ein, updatedAt, verified }) => (
  <section className={styles.container}>
    <div>
      <Item label="EIN">
        <span className={styles.ein}>{ein}</span>
      </Item>
      <Item label="Account">
        <span className={styles[verified ? 'verified' : 'notVerified']}>
          {verified ? 'Verified' : 'Not Verified'}
        </span>
      </Item>
    </div>
    <div className={styles.right}>
      <Item label="Created">{createdAt}</Item>
      <Item label="Updated">{updatedAt}</Item>
    </div>
  </section>
));
