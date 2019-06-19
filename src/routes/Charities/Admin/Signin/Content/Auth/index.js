import React from 'react';
import { Form } from 'formik';
import Input from 'components/Input';
import { Submit } from 'components/Button';
import Link from 'components/Link';
import Container from './container';
import styles from './index.css';

export default Container(() => (
  <Form className={styles.container}>
    <Input name="email" label="Email" />
    <h6 className={styles.forgot}>
      If you have forgotten the email used, please contact <Link mail="support@phenominal.fund" general>support@phenominal.fund</Link>.
    </h6>
    <Submit className={styles.button} center>
      Sign In
    </Submit>
    <h5>
      New to Phenominal? <Link className="general" to="/charities/admin/signup">Sign Up</Link>
    </h5>
  </Form>
));
