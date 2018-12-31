import React from 'react';
import Bio from './Bio';
import Info from './Info';
import Pic from './Pic';
import Container from './container';
import styles from './index.css';

export default Container(({ dots, loops, bio, created, nameFirst, nameLast, picture, username }) => (
  <section className={styles.container}>
    <div className={styles.firstTier}>
      <Pic {...loops} picture={picture} />
      <Info first={nameFirst} last={nameLast} username={username} loopCount={loops.count} dots={dots} />
    </div>
    <Bio bio={bio} created={created} />
  </section>
));
