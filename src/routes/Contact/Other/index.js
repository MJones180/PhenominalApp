import React from 'react';
import Link from 'components/Link';
import styles from './index.css';

const Help = () => (
  <Link general className={styles.link} to="/help">
    Help Center
  </Link>
);

const Suggest = () => (
  <Link general className={styles.link} to="/charities/suggest">
    make a suggestion
  </Link>
);

const Email = () => (
  <Link general className={styles.link} mail="support@phenominal.fund">
    support@phenominal.fund
  </Link>
);

export default () => (
  <section className={styles.container}>
    <h3 className="general">
      Other options
    </h3>
    <h4 className={styles.option}>
      Check the <Help /> for commonly asked questions.
    </h4>
    <h4 className={styles.option}>
      If you have any charity ideas you can <Suggest />.
    </h4>
    <h4 className={styles.option}>
      You can also email us directly at <Email />.
    </h4>
  </section>
);
