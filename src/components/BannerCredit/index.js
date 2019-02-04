/*
NAME
  BannerCredit [Component]
USAGE
  return <BannerCredit credit={...} />
PROPS
  - credit: [string] person/organization to attribute credit
*/

import React from 'react';
import styles from './index.css';

export default ({ credit }) => {
  if (!credit) return false;
  return (
    <div className={styles.credit}>
      Photograph by {credit}
    </div>
  );
};
