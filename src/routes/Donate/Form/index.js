import React from 'react';
import { Form } from 'formik';
import Amount from './Amount';
import Events from './Events';
import Submit from './Submit';
import Container from './container';

export default Container(({ errors, data, setFieldError, setFieldTouched, setFieldValue, values }) => (
  <Form>
    <Amount
      balance={data.balance}
      errors={errors}
      setFieldError={setFieldError}
      setFieldTouched={setFieldTouched}
      setFieldValue={setFieldValue}
      values={values}
    />
    <Events
      events={data.events}
      setFieldTouched={setFieldTouched}
      setFieldValue={setFieldValue}
      values={values}
    />
    <Submit
      balance={data.balance}
      events={data.events}
      values={values}
    />
  </Form>
));
