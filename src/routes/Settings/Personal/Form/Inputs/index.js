import React from 'react';
import Input from 'components/Input';
import Container from './container';
import styles from './index.css';

export default Container(props => (
  <div>
    <div className={styles.name}>
      <Input {...props('nameFirst', 'First Name')} />
      <Input {...props('nameLast', 'Last Name')} />
    </div>
    <Input {...props('email', 'Email')} />
  </div>
));
