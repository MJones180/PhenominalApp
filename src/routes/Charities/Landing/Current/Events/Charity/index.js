import React from 'react';
import BannerCredit from 'components/BannerCredit';
import Banner from './Banner';
import Buttons from './Buttons';
import Mission from './Mission';
import Multiplier from './Multiplier';
import Progress from './Progress';
import Title from './Title';
import styles from './index.css';

export default ({ data: { charity, ...data } }) => (
  <div className={`${styles.charity} ${data.multiplier && styles.multiplier}`} key={data.id}>
    <Banner ein={charity.ein} name={charity.name} />
    <BannerCredit credit={charity.bannerCredit} />
    <div className={styles.content}>
      <div className={styles.contentCenter}>
        <Title acronym={charity.acronym} name={charity.name} />
        <Mission mission={charity.mission} website={charity.website} />
        <Progress endDate={data.endDate} goal={data.goal} total={data.total} />
        <Buttons ein={charity.ein} id={data.id} />
      </div>
    </div>
    <Multiplier multiplier={data.multiplier} name={data.sponsorName} website={data.sponsorWebsite} />
  </div>
);
