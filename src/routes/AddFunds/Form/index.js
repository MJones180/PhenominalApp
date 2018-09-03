import React from 'react';
import { Form } from 'formik';
import Amount from './Amount';
import Header from './Header';
import Notice from './Notice';
import Result from './Result';
import Submit from './Submit';
import Container from './container';
import styles from './index.css';

export default Container(({ handleSubmit, setFieldValue, values }) => (
  <Form className={styles.container}>
    <Header />
    <Amount />
    <Notice />
    <Result amount={values.amount} />
    <Submit
      handleSubmit={handleSubmit}
      setFieldValue={setFieldValue}
      values={values}
    />
  </Form>
));
