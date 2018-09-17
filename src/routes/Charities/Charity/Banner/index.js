import React from 'react';
import { image } from 'utils/endpoints';
import Credit from './Credit';
import styles from './index.css';

export default ({ data }) => (
  <section className={styles.container}>
    <Credit name={data.bannerCredit} />
    <div className={styles.background}>
      <img
        src={image(`charities/banners/${data.ein}.jpg`)}
        alt={data.name}
        className={styles.image}
        key="banner"
      />
      <h2 className={styles.align} key="title">
        <span className={styles.title}>
          {data.name} {' '}
          {data.acronym && (
            <abbr>
              {data.acronym}
            </abbr>
          )}
        </span>
      </h2>
    </div>
  </section>
);
