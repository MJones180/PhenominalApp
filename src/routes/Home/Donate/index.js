import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <h4 className="general">
      Donate what you want.
    </h4>
    <p>
      The amount donated is not as important as the intention of wanting to help a cause.
      Phenominal provides a gateway to make this happen by allowing donations of any denomination.
      When all of the individual donations are totaled together, large sums of money will follow.
      At Phenominal, there is no minimum donation; let us create change together.
    </p>
    <Button to="/charities" className={styles.button}>
      View Today&apos;s Charities
    </Button>
  </section>
);
