/*
NAME
  Alert [Programmatic Component]
USAGE
  Updatable alert
  | import createAlert from 'components/Alert';
  | const alert = createAlert('startingText');
  | alert.<TYPE>('updatedText');
  Simple onetime alert
  | import createAlert from 'components/Alert';
  | createAlert().<TYPE>('text');
  <TYPE> can be 'default', 'error', 'special', or 'success'
EXAMPLES
  An alert succeeding and updating with a custom message
  | const successAlert = createAlert('Waiting for action to complete.');
  | successAlert.success('Action was successful.');
  An alert failing and updating with the default text
  | const errorAlert = createAlert('Waiting for action to fail.');
  | errorAlert.error();
  Two non-updatable alerts
  | createAlert().default('Simple alert.');
  | createAlert().special('Special alert.');
NOTES
  - If no text is passed, it will default to an error message
*/

import { toast, Slide } from 'react-toastify';
// Import the 'react-toastify' styles globally
// This way bundles the library with the other styles
import './library.css';
import styles from './index.css';

// Type constants
const DEFAULT = 'default';
const ERROR = 'error';
const SPECIAL = 'special';
const SUCCESS = 'success';

// Toast settings
const settings = (type, autoClose, render) => ({
  // Should the toast be automatically closed (time in ms [int] or false)
  autoClose,
  // Styles for the toast
  className: `${styles.container} ${styles[type]}`,
  // Do not display the 'x' close button
  closeButton: false,
  // Styles for the progress bar, all types except DEFAULT use a light bar
  progressClassName: styles[type == DEFAULT ? 'progressDark' : 'progressLight'],
  // The text to use when updating the toast
  render,
  // Smooth built-in transition
  transition: Slide,
});

// Create a new alert
export default (text) => {
  // ID of the alert so it can be updated
  let alertID;
  // If text is passed, create a DEFAULT alert
  if (text) alertID = toast(text, settings(DEFAULT, false));
  // Create or update alert with the requested text
  // Curried to accept the text, defaults to an error message
  const upsert = type => (text = 'An error has occured.') => {
    // Time for the alert to close, 6 seconds by default or 15 for SPECIAL
    const autoClose = (type == SPECIAL) ? 15000 : 6000;
    // Update the alert if one was already created
    if (alertID) toast.update(alertID, settings(type, autoClose, text));
    // Create a new alert
    else toast(text, settings(type, autoClose));
  };
  return {
    default: upsert(DEFAULT),
    error: upsert(ERROR),
    special: upsert(SPECIAL),
    success: upsert(SUCCESS),
  };
};
