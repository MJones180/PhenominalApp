import React from 'react';
import { Form } from 'formik';
import Box from '../Box';
import Container from './container';
import Account from './Account';
import Charity from './Charity';
import Create from './Create';
import styles from './index.css';

export default Container(() => (
  <Box title="Charity Sign Up" large>
    <Form className={styles.container}>
      <Charity />
      <Account />
      <Create />
    </Form>
  </Box>
));
