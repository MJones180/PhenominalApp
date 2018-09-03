import React from 'react';
import { image } from 'utils/endpoints';
import Item from './Item';
import styles from './index.css';

export default ({ data }) => (
  <div>
    <img
      src={image(`charities/logos/${data.ein}.png`)}
      alt={`${data.name} Logo`}
      className={styles.logo}
      key="logo"
    />
    <Item title="Mission">
      <span className={styles.mission}>
        {data.mission}
      </span>
    </Item>
    <Item title="Location"> {data.location} </Item>
    <Item title="Phone Number"> {data.phoneNumber} </Item>
    <Item title="Website">
      <a className="general" href={data.website} target="_blank" rel="noopener noreferrer" key="website">
        View Site
      </a>
    </Item>
    <p className={styles.lastUpdated} key="lastUpdated">
      Charity data last updated on <span>{data.updatedAt}</span>.
    </p>
  </div>
);
