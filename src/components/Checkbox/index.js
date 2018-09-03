import React from 'react';
import _ from 'lodash';
import { connect } from 'formik';
import styles from './index.css';

// Connect to grab the Formik props
export default connect(({ item, label, name, formik: { setFieldTouched, setFieldValue, values } }) => {
  // The checkbox template
  const Checkbox = ({ checked, id, onChange }) => (
    <div className={styles.checkbox}>
      <label htmlFor={id}>
        <input
          checked={checked}
          id={id}
          onChange={onChange}
          type="checkbox"
        />
        <span />
        <p> { label } </p>
      </label>
    </div>
  );
  // Grab the correct value from the state
  const value = values[name];
  // Set the checkbox as touched
  const touch = () => setFieldTouched(name, true);
  // Update the checkbox's value in the state
  const setState = val => setFieldValue(name, val);
  // If it has an item prop it belongs in an array
  if (item) {
    // The change function to add and remove from the array
    const onChange = () => {
      touch();
      if (_.includes(value, item)) setState(_.pull(value, item));
      else setState(_.concat(value, item));
    };
    // Create the checkbox
    return Checkbox({
      checked: _.includes(value, item),
      id: item,
      onChange,
    });
  }
  // A checkbox that belongs by itself
  return Checkbox({
    checked: value,
    id: name,
    onChange: () => {
      touch();
      setState(!value);
    },
  });
});
