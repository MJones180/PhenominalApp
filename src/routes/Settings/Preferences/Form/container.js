import { withFormik } from 'formik';
import Mutation from 'utils/graphql/mutation';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  withFormik({
    // Grab the base input values
    mapPropsToValues: props => ({
      allowDonationEmails: props.allowDonationEmails,
      publicProfile: props.publicProfile,
    }),
    handleSubmit: (values, { setSubmitting }) => {
      const alert = createAlert('Updating your preferences.');
      // Send the mutation
      Mutation({
        mutation,
        variables: values,
        success: () => {
          // Enable the button
          setSubmitting(false);
          alert.success('Your preferences have been updated.');
        },
        error: () => {
          // Enable the button
          setSubmitting(false);
          alert.error();
        },
      });
    },
  })(Component)
);
