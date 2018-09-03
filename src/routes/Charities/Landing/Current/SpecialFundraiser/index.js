import React from 'react';
import Donate from './Donate';
import Information from './Information';
import Multiplier from './Multiplier';
import Progress from './Progress';
import styles from './index.css';

export default ({ data: { specialFundraiser, ...data } }) => (
  <div className={`${styles.specialFundraiser} ${data.multiplier && styles.multiplier}`} key={data.id}>
    <div className={styles.info}>
      <Information description={specialFundraiser.description} name={specialFundraiser.name} />
      <Multiplier multiplier={data.multiplier} name={data.sponsorName} website={data.sponsorWebsite} />
    </div>
    <div className={styles.content}>
      <Progress endDate={data.endDate} goal={data.goal} total={data.total} />
      <Donate id={data.id} />
    </div>
  </div>
);
