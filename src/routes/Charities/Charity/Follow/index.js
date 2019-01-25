import React from 'react';
import { image } from 'utils/endpoints';
import Button from 'components/Button';
import Container from './container';
import styles from './index.css';

export default Container(({ charityFollowed, click }) => (
  <section className={styles.container}>
    <Button floatingBorder {...click}>
      <img src={image('assets/Random/Follow.png')} alt="Icon" className={styles.icon} />
      {charityFollowed ? 'Unfollow' : 'Follow'}
    </Button>
  </section>
));
