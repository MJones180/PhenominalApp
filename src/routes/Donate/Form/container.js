import { withFormik } from 'formik';
import * as yup from 'yup';
import Mutation from 'utils/graphql/mutation';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';

// Grab the current user's data
export default Component => (
  withFormik({
    // Grab the base input values
    mapPropsToValues: ({ data: { checkedEvent } }) => ({
      amount: 0,
      checkedEvents: 'cjwauwvmi70mo0b427shy0yb5',
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        amount: yup.number().moreThan(0, 'Please input an amount.'),
      })
    ),
    handleSubmit: (values, { props }) => {
      props.setParentState({
        processing: true,
      });
      const alert = createAlert('Processing the donations.');
      // Process the donations
      console.log(values.checkedEvents);
      Mutation({
        mutation,
        variables: {
          amount: values.amount,
          eventID: values.checkedEvents,
        },
        success: ({ donation }) => {
          // Donation successful
          props.setParentState({
            processing: false,
            results: donation,
          });
          alert.success('Donations successful.');
        },
        error: (errors) => {
          // Display an error message if one exists
          alert.error(errors[0] ? errors[0].message : false);
          // Hide the processing spinner
          props.setParentState({
            processing: false,
          });
        },
      });
    },
  })(Component)
);
