import React from 'react';
import { Form } from 'formik';
import { Submit } from 'components/Button';
import Inputs from './Inputs';
import Container from './container';
import styles from './index.css';

export default Container(() => (
  <section className={styles.container}>
    <Form>
      <Inputs />
      <Submit center>
        Send Invite
      </Submit>
    </Form>
  </section>
));
