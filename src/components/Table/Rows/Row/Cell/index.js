import React from 'react';
import Link from 'components/Link';
import styles from './index.css';

export default ({ value, cellStyle, link }) => {
  // Styles
  const className = `${styles.cell} ${cellStyle}`;
  // The cell is a link
  if (link) return <Link className={className} to={link}> {value} </Link>;
  // A plain old cell
  return <div className={className}> {value} </div>;
};
