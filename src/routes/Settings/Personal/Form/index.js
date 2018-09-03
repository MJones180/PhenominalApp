import React from 'react';
import { Form } from 'formik';
import Inputs from './Inputs';
import Submit from './Submit';
import Container from './container';
import styles from './index.css';

export default Container(() => (
  <Form className={styles.container}>
    <Inputs />
    <Submit />
  </Form>
));
