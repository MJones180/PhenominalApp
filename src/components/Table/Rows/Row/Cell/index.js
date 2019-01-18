import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

export default ({ value, width, link }) => {
  // Styles
  const className = `${styles.cell} ${width}`;
  // The cell is a link
  if (link) return <Link className={className} to={link}> {value} </Link>;
  // A plain old cell
  return <div className={className}> {value} </div>;
};
