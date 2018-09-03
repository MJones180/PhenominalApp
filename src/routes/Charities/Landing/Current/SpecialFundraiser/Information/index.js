import React from 'react';
import styles from './index.css';

export default ({ description, name }) => ([
  <h3 key="special">
    Special Fundraiser
  </h3>,
  <h1 className={`general ${styles.name}`} key="name">
    {name}
  </h1>,
  <p className="large" key="description">
    {description}
  </p>,
]);
