import React from 'react';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <h3 className="general">
      Yep, it&apos;s spelled wrong
    </h3>
    <img src={image('assets/Home/NameExplanation.png')} alt="Explanation" />
  </section>
);
