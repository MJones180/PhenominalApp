import React from 'react';
import styles from './index.css';

export default ({ count, goal, rank }) => {
  // Ensure a rank is passed
  if (!rank) return false;
  // Ensure a goal is passed
  const Goal = () => {
    if (!goal) return false;
    return <p> {count} / {goal} </p>;
  };
  return (
    <div className={styles.container}>
      <p className={styles.rank}> {rank} </p>
      <Goal />
    </div>
  );
};
