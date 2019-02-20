/*
NAME
  Button [Component]
USAGE
  return <Button {...props}> ... </Button>
PROPS
  - center: [bool] center the component
  - className: [string] styles for the button
  - disable: [bool] should the button be clickable
  - floatingBorder: [bool] display button with a border instead of a shadow
  - onClick: [function] what should happen on button click
  - special: [bool] display in $sand color
  - to: [string] location of button redirect
  - warning: [bool] display in $coral color
  - ...props: all other props
NOTES
  - If the `to` prop is set, the button will be a routing button.
    By setting the `onClick` prop, it will be a regular button.
*/

import React from 'react';
import _ from 'lodash';
import { connect } from 'formik';
import Link from 'components/Link';
import styles from './index.css';

const Button = ({ center, children, className, disable, floatingBorder, onClick, special, to, warning, ...props }) => {
  // If the `to` is set then make it a routing button (Link -> a)
  const Tag = to ? Link : 'button';
  return (
    <div className={`${styles.container} ${center && styles.center} ${className}`}>
      <Tag
        className={`${styles.button} ${floatingBorder ? styles.floatingBorder : styles.shadow} ${special && styles.special} ${warning && styles.warning}`}
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
