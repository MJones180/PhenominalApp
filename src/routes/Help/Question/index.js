import React from 'react';
import Collapsible from 'react-collapsible';
import styles from './index.css';

export default ({ title, content }) => (
  <Collapsible
    trigger={<h4 className={styles.title}> {title} </h4>}
    easing="ease"
    className={styles.item}
    openedClassName={styles.item}
    triggerOpenedClassName={styles.activeTitle}
  >
    <p className={`${styles.content} large`}>{content}</p>
  </Collapsible>
);
