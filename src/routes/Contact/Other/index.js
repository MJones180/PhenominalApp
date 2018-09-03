import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

const Help = () => (
  <Link className={`general ${styles.link}`} to="/help">
    Help Center
  </Link>
);

const Suggest = () => (
  <Link className={`general ${styles.link}`} to="/charities/suggest">
    make a suggestion
  </Link>
);

const Email = () => (
  <a className={`general ${styles.link}`} href="mailto:support@phenominal.fund">
    support@phenominal.fund
  </a>
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
