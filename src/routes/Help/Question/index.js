import React from 'react';
import Collapsible from 'react-collapsible';
import styles from './index.css';

export default ({ children, title }) => (
  <Collapsible
    className={styles.item}
    easing="ease"
    openedClassName={styles.item}
    trigger={<h4 className={styles.title}> {title} </h4>}
    triggerOpenedClassName={styles.activeTitle}
  >
    <div className={styles.content}>
      { children }
    </div>
  </Collapsible>
);
