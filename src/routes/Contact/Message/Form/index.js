import React from 'react';
import { Form } from 'formik';
import { Submit } from 'components/Button';
import Inputs from './Inputs';
import Container from './container';

export default Container(() => (
  <Form>
    <Inputs />
    <Submit center>
      Send Message
    </Submit>
  </Form>
));
