import React from 'react';
import { image } from 'utils/endpoints';
import Link from 'components/Link';
import BannerCredit from 'components/BannerCredit';
import styles from './index.css';

export default ({ acronym, banner, bannerCredit, ein, name }) => (
  <div className={styles.container}>
    <BannerCredit credit={bannerCredit} />
    <Link to={`/charities/${ein}`}>
      <div className={styles.banner}>
        <img
          src={image(banner)}
          alt={name}
          className={styles.image}
        />
        <h3 className={styles.align}>
          <span className={styles.name}>
            {name} {' '}
            {acronym && (<abbr> {acronym} </abbr>)}
          </span>
        </h3>
      </div>
    </Link>
  </div>
);
