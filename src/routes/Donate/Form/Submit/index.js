import React from 'react';
import { Submit } from 'components/Button';
import Container from './container';
import styles from './index.css';

export default Container(({ message, invalid }) => (
  <section className={styles.container}>
    <h3 className="general">
      Donate:
    </h3>
    <h5 className={styles.message}>
      {message}
    </h5>
    <Submit className={styles.button} center special disable={invalid}>
      Donate Now
    </Submit>
  </section>
));
