import { withFormik } from 'formik';
import * as yup from 'yup';
import gql from 'graphql-tag';
import mutation from 'utils/graphql/mutation';
import { createAlert } from 'components/Alert';

export default Component => (
  withFormik({
    // The base input values
    mapPropsToValues: () => ({
      email: '',
      message: '',
      name: '',
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        email: yup.string().required('Required field.').email('Email is invalid.'),
        message: yup.string().required('Required field.').min(10, 'Minimum of 10 characters.'),
        name: yup.string().required('Required field.'),
      })
    ),
    handleSubmit: (values, { resetForm }) => {
      mutation({
        mutation: gql`
          mutation(
            $email: String!
            $message: String!
            $name: String!
          ) {
            contactMessage(
              email: $email
              message: $message
              name: $name
            )
          }
        `,
        variables: values,
        success: () => {
          // Reset the form
          resetForm();
          // Alert the user that their message was sent
          createAlert({
            text: 'Message sent.',
            type: 'success',
          });
        },
        error: () => {
          createAlert({
            text: 'An error has occurred.',
            type: 'error',
          });
        },
      });
    },
  })(Component)
);
