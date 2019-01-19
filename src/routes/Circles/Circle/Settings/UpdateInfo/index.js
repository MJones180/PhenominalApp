import React from 'react';
import { Form } from 'formik';
import { Submit } from 'components/Button';
import Inputs from './Inputs';
import Container from './container';
import styles from './index.css';

export default Container(() => (
  <div className={styles.container}>
    <h3 className="general">
      Update Information
    </h3>
    <Form className={styles.form}>
      <Inputs />
      <Submit center>
        Update
      </Submit>
    </Form>
  </div>
));
