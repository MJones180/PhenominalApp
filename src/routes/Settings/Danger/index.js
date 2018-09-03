import React from 'react';
import Button from 'components/Button';
import Container from './container';
import styles from './index.css';

export default Container(({ click, disable }) => (
  <section className={styles.container}>
    <h3 className="general">
      Danger Zone
    </h3>
    <h4 className={styles.info}>
      If you are worried that your account has been compromised you can sign out on all devices.
    </h4>
    <Button disable={disable} onClick={click} center warning>
      Sign out on all devices
    </Button>
  </section>
));
