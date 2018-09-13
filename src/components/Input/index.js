import React from 'react';
import _ from 'lodash';
import { connect } from 'formik';
import Currency from 'react-currency-input';
import FormError from 'components/FormError';
import styles from './index.css';

const Input = ({ className, disableErrors, eggshell, label, name, optional }, InputType, InputProps) => (
  <div className={`${styles.container} ${eggshell && styles.bgEggshell} ${className}`}>
    {!disableErrors && <FormError active={styles.errorActive} className={styles.error} name={name} />}
    <InputType
      autoComplete={name}
      className={`${styles.input} ${optional && styles.optional} ${InputProps.value && styles.notEmpty}`}
      id={name}
      name={name}
      {...InputProps}
    />
    <label className={styles.label} htmlFor={name}> { label } </label>
  </div>
);

// Create a connected input
const defaultConnected = connect(({ formik: { handleBlur, handleChange, values }, ...props }) => (
  Input(props, props.InputType || 'input', {
    onBlur: handleBlur,
    onChange: handleChange,
    value: values[props.name],
  })
));

// Create an input, connected by default
export default props => defaultConnected(props);

// Create a connected textarea
export const Textarea = props => defaultConnected({
  ...props,
  InputType: 'textarea',
  className: `${styles.textarea} ${props.className}`,
});

// A non-connected input for use outside of a form
export const BasicInput = ({ onChange, value, ...props }) => (
  Input({ disableErrors: true, ...props }, 'input', {
    onChange,
    value,
  })
);

// A connected input that handles formatted currency
export const CurrencyInput = connect(({ formik: { handleBlur, setFieldValue, values }, ...props }) => (
  Input(props, Currency, {
    // Necessary to signify the input has been touched
    onBlur: handleBlur,
    // Update the state with the value in pennies
    onChangeEvent: (event, formattedValue, rawValue) => setFieldValue(props.name, _.round(rawValue * 100)),
    prefix: '$',
    // Convert back to a float
    value: values[props.name] / 100,
  })
));
