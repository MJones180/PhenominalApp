import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <h4 className="general">
      Donate what you want.
    </h4>
    <p>
      It does not matter how much you donate, it is the intention that is valuable.
      Imagine a thousand donations consisting of two cents each, that would raise two hundred dollars.
      It does not take a lot to make a difference, instead it takes the pocket change from a group of individuals.
      At Phenominal there is no minimum donation; let us create change together.
    </p>
    <Button to="/charities" className={styles.button}>
      View Today&apos;s Charities
    </Button>
  </section>
);
