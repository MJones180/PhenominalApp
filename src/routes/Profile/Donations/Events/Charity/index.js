import React from 'react';
import { Link } from 'react-router-dom';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default ({ acronym, bannerCredit, ein, name }) => (
  <div className={styles.container}>
    {bannerCredit && (
      <div className={styles.credit}>
        Photograph by {bannerCredit}
      </div>
    )}
    <Link to={`/charities/${ein}`}>
      <div className={styles.banner}>
        <img
          src={image(`charities/banners/${ein}.jpg`)}
          alt={name}
          className={styles.image}
        />
        <h2 className={styles.align}>
          <span className={styles.name}>
            {name} {' '}
            {acronym && (<abbr> {acronym} </abbr>)}
          </span>
        </h2>
      </div>
    </Link>
  </div>
);
