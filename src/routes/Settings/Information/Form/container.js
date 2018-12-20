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
      bio: props.bio || '',
      email: props.email,
      nameFirst: props.nameFirst,
      nameLast: props.nameLast,
      username: props.username,
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        bio: yup.string().nullable().trim().max(250, 'Max length of paragraph is 250 characters.'),
        email: yup.string().required('Required field.').trim().email('Email is invalid.'),
        nameFirst: yup.string().required('Required field.').trim().max(30, 'Please enter a valid first name.'),
        nameLast: yup.string().required('Required field.').trim().max(30, 'Please enter a valid last name.'),
        username: yup.string().required('Required field.')
          .lowercase()
          .trim()
          .notOneOf(takenUsernames, 'Username already taken.')
          .min(5, 'Must be at least 5 characters.')
          .max(30, 'Can be no more than 30 characters.')
          .matches(/^[a-zA-Z0-9_]+$/, {
            message: 'Letters, numbers, and underscores only.',
            excludeEmptyString: true,
          }),
      })
    ),
    handleSubmit: (values, { setSubmitting, validateForm }) => {
      // Alert the user that their account is being updated
      const updateAlert = updatableAlert('Updating your personal information.');
      // Trimmed input values
      const trimmedValues = _.mapValues(values, value => _.trim(value));
      // Send the mutation
      mutation({
        mutation: gql`
          mutation(
            $bio: String!
            $email: String!
            $nameFirst: String!
            $nameLast: String!
            $username: String!
          ) {
            updateUser(
              bio: $bio
              email: $email
              nameFirst: $nameFirst
              nameLast: $nameLast
              username: $username
            )
          }
        `,
        variables: trimmedValues,
        success: () => {
          // Enable the button
          setSubmitting(false);
          // Alert the user that their account is updated
          updateAlert({
            updatedText: 'Your personal information has been updated.',
          });
          // Update the user's data in the state
          updateUser(trimmedValues);
        },
        error: (errors) => {
          // Enable the button
          setSubmitting(false);
          // Set error if the username already exists
          if (errors[0].name == 'UsernameAlreadyExists') {
            // Append the trimmed username
            takenUsernames.push(_.toLower(trimmedValues.username));
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
