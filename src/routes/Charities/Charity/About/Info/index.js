import React from 'react';
import { image } from 'utils/endpoints';
import Link from 'components/Link';
import Item from './Item';
import styles from './index.css';

export default ({ location, logo, mission, name, phoneNumber, website, updatedAt }) => (
  <div>
    <img
      src={image(logo)}
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
      <Link general external={website} key="website">
        View Site
      </Link>
    </Item>
    <p className={styles.lastUpdated} key="lastUpdated">
      Charity data last updated on <span>{updatedAt}</span>.
    </p>
  </div>
);
