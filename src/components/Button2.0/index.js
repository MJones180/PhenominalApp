import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'formik';
import styles from './index.css';

const Button = ({ center, children, className, disable, onClick, special, to, warning, ...props }) => {
  // If the `to` is set then make it a routing button (Link -> a)
  const Tag = to ? Link : 'button';
  return (
    <div className={`${center && styles.center} ${className}`}>
      <Tag
        className={`${styles.button} ${special && styles.special} ${warning && styles.warning}`}
        disabled={disable}
        onClick={disable ? () => {} : onClick}
        to={to}
        {...props}
      >
        {children}
      </Tag>
    </div>
  );
};

export default Button;

export const Submit = connect(({ formik: { errors, isSubmitting }, ...props }) => (
  <Button
    disable={!_.isEmpty(errors) || isSubmitting}
    type="submit"
    {...props}
  />
));
