import React from 'react';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default ({ link, name }) => (
  <a target="_blank" rel="noopener noreferrer" className={styles[name]} href={link}>
    <img src={image(`logos/SocialMedia_${name}.svg`)} alt="Icon" />
  </a>
);
