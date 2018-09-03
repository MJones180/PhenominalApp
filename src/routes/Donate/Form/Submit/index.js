import React from 'react';
import { Submit } from 'components/Button';
import Container from './container';
import styles from './index.css';

export default Container(({ amount, total }) => (
  <section className={styles.container}>
    <h3 className="general">
      Donate:
    </h3>
    <h5 className={styles.message}>
      You will donate <span>{amount}</span> to each of the checked events above.
      <br />
      You will donate a total of <span>{total}</span>.
    </h5>
    <Submit className={styles.button} center special>
      Donate Now
    </Submit>
  </section>
));
