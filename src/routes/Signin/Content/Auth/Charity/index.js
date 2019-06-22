import React from 'react';
import Link from 'components/Link';
import styles from './index.css';

const Signin = () => <Link to="/charities/admin/signin" general>Sign In</Link>;
const Signup = () => <Link to="/charities/admin/signup" general>Sign Up</Link>;

export default () => (
  <h5 className={styles.center}>
    Charity <Signin /> <span>|</span> Charity <Signup />
  </h5>
);
