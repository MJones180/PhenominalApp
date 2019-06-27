import React from 'react';
import Input from 'components/Input';
import Container from './container';
import styles from './index.css';

export default Container(props => (
  <div className={styles.container}>
    <Input {...props('email', 'Your Email')} />
    <Input {...props('name', 'Charity\'s Name')} />
    <Input {...props('ein', 'EIN', true)} />
    <Input {...props('url', 'URL', true)} />
  </div>
));
