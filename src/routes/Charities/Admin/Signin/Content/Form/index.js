import React from 'react';
import { Form } from 'formik';
import Input from 'components/Input';
import { Submit } from 'components/Button';
import Link from 'components/Link';
import Box from '../Box';
import Container from './container';
import styles from './index.css';

export default Container(() => (
  <Box title="Charity Sign In">
    <Form className={styles.container}>
      <Input name="email" label="Email" />
      <h5 className={styles.forgot}>
        If you have forgotten the email used, please <Link to="/contact" general>Contact Us</Link>.
      </h5>
      <Submit className={styles.button} center>
        Sign In
      </Submit>
      <h5 className={styles.new}>
        New to Phenominal? <Link className="general" to="/charities/admin/signup">Sign Up</Link>
      </h5>
    </Form>
  </Box>
));
