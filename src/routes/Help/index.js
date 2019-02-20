import React from 'react';
import Link from 'components/Link';
import HeadTags from './headTags';
import Questions from './Questions';
import styles from './index.css';

export default () => (
  <main className={styles.container}>
    <HeadTags />
    <h3 className={`general ${styles.title}`}>
      Help Center
    </h3>
    <p className={`large ${styles.text}`}>
      Question not answered? Please <Link general to="/contact">Contact Us</Link>.
    </p>
    <Questions />
  </main>
);
