import React from 'react';
import { Form } from 'formik';
import { Submit } from 'components/Button';
import Inputs from './Inputs';
import Container from './container';
import styles from './index.css';

export default Container(() => (
  <section className={styles.container}>
    <h3 className="general">
      Create Circle
    </h3>
    <Form>
      <Inputs />
      <Submit center>
        Create Circle
      </Submit>
    </Form>
  </section>
));
