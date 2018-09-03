import React from 'react';
import { connect } from 'formik';
import styles from './index.css';

export default connect(({ formik: { errors, touched }, active, className, name }) => {
  // If the field has been touched, display the error if there is one
  const error = touched[name] && errors[name];
  return <span className={`${styles.error} ${error && active} ${className}`}> { error } </span>;
});
