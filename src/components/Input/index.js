import React from 'react';
import { connect } from 'formik';
import { currency as formatCurrency } from 'utils/number';
import FormError from 'components/FormError';
import styles from './index.css';

const Input = ({ className, disableErrors, eggshell, label, name, optional }, InputProps, InputType = 'input') => (
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
  Input(props, {
    onBlur: handleBlur,
    onChange: handleChange,
    value: values[props.name],
  }, props.InputType)
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
  Input({ disableErrors: true, ...props }, { onChange, value })
);

// A connected input that handles formatted currency
export const CurrencyInput = connect(({ formik: { handleBlur, setFieldValue, values }, ...props }) => (
  // strips everything that is not a number (positive or negative).
  Input(props, {
    // Necessary to signify the input has been touched
    onBlur: handleBlur,
    onChange: (event) => {
      // Convert to raw number
      const val = Number(event.target.value.toString().replace(/[^0-9-]/g, ''));
      // Update the state
      setFieldValue(props.name, val);
    },
    // Format the number as currency for display
    value: formatCurrency(values[props.name]),
  })
));
