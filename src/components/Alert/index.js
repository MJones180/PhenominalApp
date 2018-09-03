import _ from 'lodash';
import { toast, style } from 'react-toastify';
import colors from 'styles/variables';
import styles from './index.css';

// These specific styles must be defined here
style({
  width: 300,
  colorDefault: colors.eggshell,
  colorError: colors.coral,
  colorInfo: colors.stone,
  colorSuccess: colors.azure,
  colorWarning: colors.sand,
});

// Passed the following parameters:
// -  autoClose: how long until the alert disappears; default is 5 seconds
// -  type: can be default, info, success, warning, error; default is info
// -  color: either white or stone; default is white
// -  props: any additional props needed
const settings = (autoClose = 5000, type = 'success', color = 'white', props) => ({
  autoClose,
  className: `${styles.container} ${styles[color]}`,
  type: toast.TYPE[_.toUpper(type)],
  ...props,
});

// Creates an updatable toast
// Returns a function to update the toast
export const updatableAlert = (text) => {
  // Send a default toast
  const toastID = toast(text, settings(false, 'default', 'stone'));
  // When this callback is executed, the toast is updated
  // Can be used multiple times
  return ({ autoClose, color, type, updatedText }) => {
    toast.update(toastID, settings(autoClose, type, color, {
      render: updatedText,
    }));
  };
};

// Creates a simple, one-time toast
// Returns the toast's ID
export const createAlert = ({ autoClose, color, text, type }) => (
  toast(text, settings(autoClose, type, color))
);
