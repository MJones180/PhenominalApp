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
      checkedEvent,
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        amount: yup.number().moreThan(0, 'Please input an amount.'),
        checkedEvent: yup.string().required('Please select a charity.'),
      })
    ),
    handleSubmit: (values, { props }) => {
      props.setParentState({
        processing: true,
      });
      const alert = createAlert('Processing the donation.');
      // Process the donation
      Mutation({
        mutation,
        variables: {
          amount: values.amount,
          eventID: values.checkedEvent,
        },
        success: ({ donation }) => {
          // Donation successful
          props.setParentState({
            processing: false,
            results: donation,
          });
          alert.success('Donation successful.');
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
