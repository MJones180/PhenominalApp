import React from 'react';
import { image } from 'utils/endpoints';
import Container from './container';
import Credit from './Credit';
import styles from './index.css';

export default Container(({ acronym, bannerCredit, ein, name }) => (
  <section className={styles.container}>
    <Credit name={bannerCredit} />
    <div className={styles.background}>
      <img
        src={image(`charities/banners/${ein}.jpg`)}
        alt={name}
        className={styles.image}
        key="banner"
      />
      <h2 className={styles.align} key="title">
        <span className={styles.title}>
          {name} {' '}
          {acronym && (
            <abbr>
              {acronym}
            </abbr>
          )}
        </span>
      </h2>
    </div>
  </section>
));
