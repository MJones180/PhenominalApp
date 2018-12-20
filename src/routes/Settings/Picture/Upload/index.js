import React from 'react';
import Container from './container';
import Control from './Control';
import Directions from './Directions';
import Submit from './Submit';
import styles from './index.css';

export default Container(({ newPic, submit, ...controlProps }) => (
  <div>
    <div className={styles.align}>
      <Control newPic={newPic} {...controlProps} />
      <Directions newPic={newPic} />
    </div>
    <Submit newPic={newPic} submit={submit} />
  </div>
));
