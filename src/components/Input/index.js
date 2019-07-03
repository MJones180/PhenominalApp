import React from 'react';
import { connect } from 'formik';
import { currency as formatCurrency } from 'utils/number';
import FormError from 'components/FormError';
import styles from './index.css';

// Render the input component
const Render = ({ className, disableErrors, eggshell, label, name, optional, type: InputType = 'input', value, ...InputProps }) => (
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

// Hook the input up to Formik and make it stateful
const Connected = connect(({ formik: { handleBlur, handleChange, setFieldTouched, values }, ...props }) => (
  Render({
    onBlur: handleBlur,
    onChange: handleChange,
    // Set the field as touched so errors can be seen immediately
    onFocus: () => setFieldTouched(props.name, true),
    value: values[props.name],
    ...props,
  })
));

// Basic form input
export default Connected;

// Basic form textarea
export const Textarea = props => Connected({
  className: `${styles.textarea} ${props.className}`,
  type: 'textarea',
  ...props,
});

// A stateless input for use outside of a form
export const BasicInput = props => Render({ disableErrors: true, ...props });

// Wrapper to make formatted connected inputs
const Format = Component => connect(({ formik: { setFieldValue, values }, ...props }) => (
  Connected({
    ...props,
    ...Component({
      // Set the field value in the state
      setValue: val => setFieldValue(props.name, val),
      // Current displayed value
      value: values[props.name],
    }),
  })
));

// Strip everything from the input value that is not a number
const rawNumb = ({ target }) => target.value.replace(/\D/g, '');
// Substring from a to b
const sub = (val, a, b) => val.substring(a, b);
// Truncate to n characters
const truncate = (val, n) => sub(val, 0, n);

// Currency: $0,000.00
export const CurrencyInput = Format(({ setValue, value }) => ({
  onChange: (event) => {
    // Update the state with the raw number
    setValue(rawNumb(event));
  },
  // Format the number as currency for display
  value: formatCurrency(value),
}));

// EIN: 00-0000000
export const EINInput = Format(({ setValue }) => ({
  onChange: (event) => {
    event.persist();
    let caret = event.target.selectionStart;
    window.requestAnimationFrame(() => {
      event.target.selectionStart = caret;
      event.target.selectionEnd = caret;
    });

    // Raw input value
    const input = truncate(rawNumb(event), 9);
    const { length } = input;
    let val = '';
    // Add symbols depending on length of input
    if (length > 0) val += sub(input, 0, 2);
    if (length > 2) val += `-${sub(input, 2, 9)}`;
    // Adjust carrot position
    if (length == 3 && caret == 3) caret = 4;
    // Update the state
    setValue(val);
  },
}));

const getCaret = (event) => {
  event.persist();
  const caret = event.target.selectionStart;
  return {
    caret,
    setCaret: (position = caret) => {
      window.requestAnimationFrame(() => {
        event.target.selectionStart = position;
        event.target.selectionEnd = position;
      });
    },
  };
};

// Phone Number: (000) 000-0000
export const PhoneNumberInput = Format(({ setValue }) => ({
  onChange: (event) => {
    const { caret, setCaret } = getCaret(event);

    // Raw input value
    const input = truncate(rawNumb(event), 10);
    const { length } = input;
    let val = '';
    // Add symbols depending on length of input
    if (length > 0) val += `(${sub(input, 0, 3)}`;
    if (length > 3) val += `) ${sub(input, 3, 6)}`;
    if (length > 6) val += `-${sub(input, 6, 10)}`;
    // Adjust carrot position
    if (length == 1 && caret == 1) setCaret(2);
    else if (length == 4 && caret == 5) setCaret(7);
    else if (length == 7 && caret == 10) setCaret(11);
    else setCaret();
    // Update the state
    setValue(val);
  },
}));
