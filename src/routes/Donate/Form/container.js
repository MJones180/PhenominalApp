import { withFormik } from 'formik';
import * as yup from 'yup';
import gql from 'graphql-tag';
import mutation from 'utils/graphql/mutation';
import { createAlert } from 'components/Alert';

// Grab the current user's data
export default Component => (
  withFormik({
    // Grab the base input values
    mapPropsToValues: ({ data: { checkedEvent } }) => ({
      amount: 0,
      checkedEvents: checkedEvent ? [checkedEvent] : [],
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        amount: yup.number().moreThan(0, 'Please input an amount.'),
        checkedEvents: yup.array().required('Must select at least one event.'),
      })
    ),
    handleSubmit: (values, { props }) => {
      props.setParentState({
        processing: true,
      });
      // Process the donations
      mutation({
        mutation: gql`
          mutation(
            $amount: Int!
            $events: [ID!]
          ) {
            donation(
              amount: $amount
              events: $events
            ) {
              amount
              balances
              events
              ids
            }
          }
        `,
        variables: {
          amount: values.amount,
          events: values.checkedEvents,
        },
        success: ({ donation }) => {
          // Donation successful
          props.setParentState({
            processing: false,
            results: donation,
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
