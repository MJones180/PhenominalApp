import { withFormik } from 'formik';
import gql from 'graphql-tag';
import mutation from 'utils/graphql/mutation';
import { updatableAlert } from 'components/Alert';

export default Component => (
  withFormik({
    // Grab the base input values
    mapPropsToValues: props => ({
      allowDonationEmails: props.data.preferences.allowDonationEmails,
    }),
    handleSubmit: (values, { setSubmitting }) => {
      // Alert the user that their account is being updated
      const updateAlert = updatableAlert('Updating your preferences.');
      // Send the mutation
      mutation({
        mutation: gql`
          mutation($allowDonationEmails: Boolean!) {
            updateUser(
              allowDonationEmails: $allowDonationEmails
            )
          }
        `,
        variables: values,
        success: () => {
          // Enable the button
          setSubmitting(false);
          // Alert the user that their account is updated
          updateAlert({
            updatedText: 'Your preferences have been updated.',
          });
        },
        error: () => {
          // Enable the button
          setSubmitting(false);
          // Alert the user that an error has occured
          updateAlert({
            type: 'error',
            updatedText: 'An error has occured, please try again soon.',
          });
        },
      });
    },
  })(Component)
);
