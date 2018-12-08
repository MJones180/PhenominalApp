import { withFormik } from 'formik';
import * as yup from 'yup';
import gql from 'graphql-tag';
import mutation from 'utils/graphql/mutation';
import { updateUser } from 'utils/auth/user';
import { updatableAlert } from 'components/Alert';

export default Component => (
  withFormik({
    // Grab the base input values
    mapPropsToValues: props => ({
      email: props.data.email,
      nameFirst: props.data.nameFirst,
      nameLast: props.data.nameLast,
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        email: yup.string().required('Required field.').email('Email is invalid.'),
        nameFirst: yup.string().required('Required field.'),
        nameLast: yup.string().required('Required field.'),
      })
    ),
    handleSubmit: (values, { setSubmitting }) => {
      // Alert the user that their account is being updated
      const updateAlert = updatableAlert('Updating your personal information.');
      // Send the mutation
      mutation({
        mutation: gql`
          mutation(
            $email: String!
            $nameFirst: String!
            $nameLast: String!
          ) {
            updateUser(
              email: $email
              nameFirst: $nameFirst
              nameLast: $nameLast
            )
          }
        `,
        variables: values,
        success: () => {
          // Enable the button
          setSubmitting(false);
          // Alert the user that their account is updated
          updateAlert({
            updatedText: 'Your personal information has been updated.',
          });
          // Update the user's data in the state
          updateUser(values);
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
