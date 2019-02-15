import React from 'react';
import Logo from './Logo';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <h4 className="general">
      Some charities we support
    </h4>
    <div className={styles.logos}>
      <Logo ein="95-1831116" name="Direct Relief" />
      <Logo ein="52-2347446" name="Tuesday's Children" />
      <Logo ein="36-3241033" name="American Refugee Committee" />
      <Logo ein="23-2519029" name="Israel Guide Dog Center for the Blind" />
    </div>
  </section>
);
