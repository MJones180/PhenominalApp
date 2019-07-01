import React from 'react';
import { connect } from 'formik';
import { currency as formatCurrency } from 'utils/number';
import FormError from 'components/FormError';
import styles from './index.css';

const Input = ({ className, disableErrors, eggshell, label, name, optional, type: InputType = 'input', value, ...InputProps }) => (
  <div className={`${styles.container} ${eggshell && styles.bgEggshell} ${className}`}>
    {!disableErrors && <FormError active={styles.errorActive} className={styles.error} name={name} />}
    <InputType
      autoComplete={name}
      className={`${styles.input} ${optional && styles.optional} ${value && styles.notEmpty}`}
      id={name}
      name={name}
      value={value}
      {...InputProps}
    />
    <label className={styles.label} htmlFor={name}> { label } </label>
  </div>
);

// Create a connected input
const defaultConnected = connect(({ formik: { handleBlur, handleChange, setFieldTouched, values }, ...props }) => (
  Input({
    onBlur: handleBlur,
    onChange: handleChange,
    // Set the field as touched so errors can be seen immediately
    onFocus: () => setFieldTouched(props.name, true),
    value: values[props.name],
    ...props,
  })
));

// Create an input, connected by default
export default props => defaultConnected(props);

// Create a connected textarea
export const Textarea = props => defaultConnected({
  className: `${styles.textarea} ${props.className}`,
  type: 'textarea',
  ...props,
});

// A non-connected input for use outside of a form
export const BasicInput = props => Input({ disableErrors: true, ...props });

// A connected input that handles formatted currency
export const CurrencyInput = connect(({ formik: { handleBlur, setFieldTouched, setFieldValue, values }, ...props }) => (
  Input({
    // Necessary to signify the input has been touched
    onBlur: handleBlur,
    onChange: (event) => {
      // Strips everything that is not a number
      const val = Number(event.target.value.toString().replace(/[^0-9]/g, ''));
      // Update the state
      setFieldValue(props.name, val);
    },
    // Set the field as touched so errors can be seen immediately
    onFocus: () => setFieldTouched(props.name, true),
    // Format the number as currency for display
    value: formatCurrency(values[props.name]),
    ...props,
  })
));
