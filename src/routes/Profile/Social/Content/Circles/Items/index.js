import React from 'react';
import _ from 'lodash';
import Circle from './Circle';
import Create from './Create';
import styles from './index.css';

export default ({ circles, ownProfile }) => (
  <div className={styles.container}>
    <h3 className="general">
      Circles
    </h3>
    <div className={styles.circles}>
      {ownProfile && <Create />}
      {!circles[0] && !ownProfile && (<h4> No Circles </h4>)}
      {_.map(circles, ({ id, name }) => <Circle id={id} name={name} key={id} />)}
    </div>
  </div>
);
