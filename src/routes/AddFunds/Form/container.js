import { withFormik } from 'formik';
import * as yup from 'yup';
import { currentUser } from 'utils/auth/user';
import Mutation from 'utils/graphql/mutation';
import { createAlert } from 'components/Alert';
import mutation from './mutation.graphql';

// Grab the current user's data
export default Component => currentUser(
  withFormik({
    // Grab the base input values
    mapPropsToValues: () => ({
      amount: 100,
      submitData: null,
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        amount: yup.number().moreThan(99, 'Please input at least $1.00.'),
      })
    ),
    handleSubmit: (values, { props, setSubmitting }) => {
      const { submitData } = values;
      // Block the form from submitting on input enter
      // Wait until it has the necessary data it needs
      if (!submitData) {
        setSubmitting(false);
        return;
      }
      props.setParentState({
        processing: true,
      });
      // Process the funds addition
      Mutation({
        mutation,
        variables: submitData,
        success: ({ addFunds }) => {
          props.setParentState({
            processing: false,
            results: addFunds,
          });
        },
        error: () => {
          createAlert({
            text: 'An error has occurred.',
            type: 'error',
          });
          // Hide the processing spinner
          props.setParentState({
            processing: false,
          });
        },
      });
    },
  })(Component)
);
