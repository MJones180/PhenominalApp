import React from 'react';
import Invite from './Invite';
import Requests from './Requests';
import styles from './index.css';

export default ({ id, open, ownerUsername }) => (
  <section className={styles.container}>
    {!open && <Requests id={id} />}
    <Invite id={id} ownerUsername={ownerUsername} />
  </section>
);
