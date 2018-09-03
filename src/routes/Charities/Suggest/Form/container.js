import { withFormik } from 'formik';
import * as yup from 'yup';
import gql from 'graphql-tag';
import { push } from 'utils/history';
import mutation from 'utils/graphql/mutation';
import { createAlert } from 'components/Alert';

export default Component => (
  withFormik({
    // The base input values
    mapPropsToValues: () => ({
      email: '',
      name: '',
      ein: '',
      url: '',
      representative: false,
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        email: yup.string().required('Required field.').email('Email is invalid.'),
        name: yup.string().required('Required field.'),
      })
    ),
    handleSubmit: (values) => {
      mutation({
        mutation: gql`
          mutation(
            $ein: String
            $email: String!
            $name: String!
            $representative: Boolean
            $url: String
          ) {
            charitySuggestion(
              ein: $ein
              email: $email
              name: $name
              representative: $representative
              url: $url
            )
          }
        `,
        variables: values,
        success: () => {
          // Route the user back to the charities
          push('/charities');
          // Alert the user that their suggestion was sent
          createAlert({
            text: 'Charity suggestion sent.',
            type: 'success',
          });
        },
      });
    },
  })(Component)
);
