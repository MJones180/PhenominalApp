import React from 'react';
import { image } from 'utils/endpoints';
import Item from './Item';
import styles from './index.css';

export default ({ ein, location, mission, name, phoneNumber, website, updatedAt }) => (
  <div>
    <img
      src={image(`charities/logos/${ein}.png`)}
      alt={`${name} Logo`}
      className={styles.logo}
      key="logo"
    />
    <Item title="Mission">
      <span className={styles.mission}>
        {mission}
      </span>
    </Item>
    <Item title="Location"> {location} </Item>
    <Item title="Phone Number"> {phoneNumber} </Item>
    <Item title="Website">
      <a className="general" href={website} target="_blank" rel="noopener noreferrer" key="website">
        View Site
      </a>
    </Item>
    <p className={styles.lastUpdated} key="lastUpdated">
      Charity data last updated on <span>{updatedAt}</span>.
    </p>
  </div>
);
