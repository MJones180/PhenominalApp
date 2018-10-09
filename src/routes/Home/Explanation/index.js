import React from 'react';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <h4 className="general">
      Yes, it is spelled wrong.
    </h4>
    <img src={image('logos/nameExplanation.png', { width: 550 })} alt="Explanation" />
  </section>
);
