import { withFormik } from 'formik';
import * as yup from 'yup';
import gql from 'graphql-tag';
import { currentUser } from 'utils/auth/user';
import mutation from 'utils/graphql/mutation';
import { createAlert } from 'components/Alert';

// Grab the current user's data
export default Component => currentUser(
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
            $email: String!
            $events: [ID!]
          ) {
            addDonations(
              amount: $amount
              email: $email
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
          email: props.user.email,
          events: values.checkedEvents,
        },
        success: ({ addDonations }) => {
          // Donation successful
          props.setParentState({
            processing: false,
            results: addDonations,
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
