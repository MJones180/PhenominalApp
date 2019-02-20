import React from 'react';
import { image } from 'utils/endpoints';
import Link from 'components/Link';
import styles from './index.css';

export default ({ link, name }) => (
  <Link className={styles[name]} external={link}>
    <img src={image(`logos/SocialMedia_${name}.svg`)} alt="Icon" />
  </Link>
);
