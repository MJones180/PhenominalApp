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
  <TYPE> can be 'default', 'success', or 'error'
EXAMPLES
  An alert succeeding and updating with a custom message
  | const successAlert = createAlert('Waiting for action to complete.');
  | successAlert.success('Action was successful.');
  An alert failing and updating with the default text
  | const errorAlert = createAlert('Waiting for action to fail.');
  | errorAlert.error();
  A non-updatable default alert
  | createAlert().default('Simple alert.');
NOTES
  - If no text is passed, it will default to an error message
*/

// Import the 'react-toastify' styles globally
import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css'; // eslint-disable-line
import { toast, Slide } from 'react-toastify';
import styles from './index.css';

// Toast settings
const settings = (type, autoClose, text) => ({
  // Should the toast automatically be closed after 6 seconds
  autoClose: autoClose ? 6000 : false,
  // Styles for the container
  className: `${styles.container} ${styles[type]}`,
  // Do not display the 'x' close button
  closeButton: false,
  // Styles for the progress bar
  progressClassName: styles[(type == 'success' || type == 'error') ? 'progressLight' : 'progressDark'],
  // Text to update the toast with, when empty will default to error text
  render: text || 'An error has occured.',
  // Smooth built-in transition
  transition: Slide,
});

// Create a new alert
export default (text) => {
  // Display a 'default' alert, store the alert's ID
  const id = toast(text || '', settings('default', false));
  // Update the alert with the requested text, curried to accept the type
  const update = type => text => toast.update(id, settings(type, true, text));
  return {
    default: update('default'),
    success: update('success'),
    error: update('error'),
  };
};
