import React from 'react';
import Button from 'components/Button';
import Container from './container';
import styles from './index.css';

export default Container(({ button, text }) => (
  <div className={styles.container}>
    <Button floatingBorder {...button}>
      {text}
    </Button>
  </div>
));
