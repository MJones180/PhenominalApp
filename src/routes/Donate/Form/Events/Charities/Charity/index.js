import React from 'react';
import { image } from 'utils/endpoints';
import BannerCredit from 'components/BannerCredit';
import styles from './index.css';

export default ({ acronym, bannerCredit, checked, ein, name, onClick }) => (
  <div className={`${styles.container} ${checked && styles.checked}`} onClick={onClick}>
    <BannerCredit credit={bannerCredit} />
    <img
      src={image(`charities/banners/${ein}.jpg`)}
      alt={name}
      className={styles.image}
    />
    <h2 className={styles.title}>
      {name} {' '}
      {acronym && (
        <abbr>
          {acronym}
        </abbr>
      )}
    </h2>
  </div>
);
