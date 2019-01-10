import React from 'react';
import Join from './Join';
import Container from './container';
import styles from './index.css';

export default Container(({ created, description, name, isOwner, id }) => (
  <section className={styles.container}>
    <div className={styles.name}>
      <h2 className="general">
        {name}
      </h2>
      <p className="large">
        Created on {created}
      </p>
    </div>
    <div>
      {!isOwner && <Join id={id} />}
      <p className={styles.description}>
        {description || 'This Circle has no description.'}
      </p>
    </div>
  </section>
));
