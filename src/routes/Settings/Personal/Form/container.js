import _ from 'lodash';
import { withFormik } from 'formik';
import * as yup from 'yup';
import gql from 'graphql-tag';
import mutation from 'utils/graphql/mutation';
import { updateUser } from 'utils/auth/user';
import { updatableAlert } from 'components/Alert';

const takenUsernames = [];

export default Component => (
  withFormik({
    // Grab the base input values
    mapPropsToValues: props => ({
      email: props.data.email,
      nameFirst: props.data.nameFirst,
      nameLast: props.data.nameLast,
      username: props.data.username,
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        email: yup.string().required('Required field.')
          .email('Email is invalid.'),
        nameFirst: yup.string().required('Required field.'),
        nameLast: yup.string().required('Required field.'),
        username: yup.string().required('Required field.')
          .lowercase()
          .trim()
          .notOneOf(takenUsernames, 'Username already taken.'),
      })
    ),
    handleSubmit: (values, { setSubmitting, validateForm }) => {
      // Alert the user that their account is being updated
      const updateAlert = updatableAlert('Updating your personal information.');
      // Send the mutation
      mutation({
        mutation: gql`
          mutation(
            $email: String!
            $nameFirst: String!
            $nameLast: String!
            $username: String!
          ) {
            updateUser(
              email: $email
              nameFirst: $nameFirst
              nameLast: $nameLast
              username: $username
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
        error: (errors) => {
          // Enable the button
          setSubmitting(false);
          // Set error if the username already exists
          if (errors[0].name == 'UsernameAlreadyExists') {
            // Append the trimmed username
            takenUsernames.push(_.trim(_.toLower(values.username)));
            // Display error in form
            validateForm();
            // Alert user that username already exists
            updateAlert({
              type: 'error',
              updatedText: 'Username already taken.',
            });
          } else {
            // Alert the user that an error has occured
            updateAlert({
              type: 'error',
              updatedText: 'An error has occured, please try again soon.',
            });
          }
        },
      });
    },
  })(Component)
);
