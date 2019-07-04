import React from 'react';
import Input, { EINInput } from 'components/Input';
import Container from './container';
import styles from './index.css';

export default Container(props => (
  <div className={styles.container}>
    <Input {...props('email', 'Your Email')} placeholder="email@example.com" />
    <Input {...props('name', 'Charity\'s Name')} />
    <EINInput {...props('ein', 'EIN', true)} placeholder="00-0000000" />
    <Input {...props('url', 'URL', true)} placeholder="https://example.com" />
  </div>
));
