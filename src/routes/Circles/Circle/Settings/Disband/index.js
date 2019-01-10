import React from 'react';
import Button from 'components/Button';
import Container from './container';
import styles from './index.css';

export default Container(({ click }) => (
  <section className={styles.container}>
    <h3 className="general">
      Danger Zone
    </h3>
    <p className={`large ${styles.warning}`}>
      Disband the Circle and remove all of its users.
      Careful, this cannot be undone!
    </p>
    <Button warning center onClick={click}>
      Disband
    </Button>
  </section>
));
