import React from 'react';
import _ from 'lodash';
import { connect } from 'formik';
import { currency as formatCurrency, percent as formatPercent } from 'utils/number';
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

// Combine blocks of text depending on length of raw input
const formatText = (inputLength, blocks) => {
  // The base string
  let value = '';
  // Loop through the blocks
  // The blocks are passed in as a nested array [..., [minimum length of raw input, text for the block], ...]
  _.each(blocks, ([length, text]) => {
    // Append the text
    if (inputLength > length) value += text;
  });
  // The new field value
  return value;
};

// Correctly position caret after formatting input
const handleCaret = (event, inputLength, corrections) => {
  // Needed or else React error
  event.persist();
  // Current caret position
  let caretPosition = event.target.selectionStart;
  // https://stackoverflow.com/questions/35535688/stop-cursor-jumping-when-formatting-number-in-react
  window.requestAnimationFrame(() => {
    event.target.selectionStart = caretPosition;
    event.target.selectionEnd = caretPosition;
  });
  // Due to symbols, the caret position may sometimes need to be manually overridden
  // The corrections are passed in as a nested array [..., [length of raw input, position of caret, new caret position], ...]
  _.each(corrections, ([length, position, newPosition]) => {
    // Set the new caret position if needed
    if (inputLength == length && caretPosition == position) caretPosition = newPosition;
  });
};

// $0,000.00
export const CurrencyInput = Format(({ setValue, value }) => ({
  onChange: (event) => {
    // Update the state with the raw number
    setValue(_.toInteger(rawNumb(event)));
  },
  // Format the number as currency for display
  value: formatCurrency(value),
}));

// 00-0000000
export const EINInput = Format(({ setValue }) => ({
  onChange: (event) => {
    // Raw input value
    const input = truncate(rawNumb(event), 9);
    // Length of input
    const { length } = input;
    // Update the state
    setValue(
      // Format the value
      formatText(length, [
        [0, sub(input, 0, 2)],
        [2, `-${sub(input, 2, 9)}`],
      ])
    );
    // Properly place the caret
    handleCaret(event, length, [[3, 3, 4]]);
  },
  // Total length including symbols
  // Prevents characters at the end from being deleted by typing in the middle
  maxLength: 10,
}));

// MM/YYYY
export const MonthYearInput = Format(({ setValue }) => ({
  onChange: (event) => {
    // Raw input value
    const input = truncate(rawNumb(event), 6);
    // Length of input
    const { length } = input;
    // Update the state
    setValue(
      // Format the value
      formatText(length, [
        [0, sub(input, 0, 2)],
        [2, `/${sub(input, 2, 6)}`],
      ])
    );
    // Properly place the caret
    handleCaret(event, length, [[3, 3, 4]]);
  },
  // Total length including symbols
  // Prevents characters at the end from being deleted by typing in the middle
  maxLength: 7,
}));

// 00.00%
export const PercentageInput = Format(({ setValue, value }) => ({
  onChange: (event) => {
    // Raw input value
    const input = rawNumb(event);
    // Length of input
    const { length } = input;
    // Divide by 100 to convert to decimal
    setValue(input / 100);
    // Properly place the caret
    handleCaret(event, length, [[1, 1, 5], [3, 4, 4], [2, 3, 4]]);
  },
  // Format the number as currency for display
  value: value ? formatPercent(value / 100) : '',
  // Total length including symbols
  // Prevents characters at the end from being deleted by typing in the middle
  maxLength: 6,
}));

// (000) 000-0000
export const PhoneNumberInput = Format(({ setValue }) => ({
  onChange: (event) => {
    // Raw input value
    const input = truncate(rawNumb(event), 10);
    // Length of input
    const { length } = input;
    // Update the state
    setValue(
      // Format the value
      formatText(length, [
        [0, `(${sub(input, 0, 3)}`],
        [3, `) ${sub(input, 3, 6)}`],
        [6, `-${sub(input, 6, 10)}`],
      ])
    );
    // Properly place the caret
    handleCaret(event, length, [[1, 1, 2], [4, 5, 7], [7, 10, 11]]);
  },
  // Total length including symbols
  // Prevents characters at the end from being deleted by typing in the middle
  maxLength: 14,
}));
