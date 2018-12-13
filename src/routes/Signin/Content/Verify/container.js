import React from 'react';
import _ from 'lodash';
import { connect, withFormik } from 'formik';
import * as yup from 'yup';
import gql from 'graphql-tag';
import mutation from 'utils/graphql/mutation';
import { push } from 'utils/history';
import { updateUser } from 'utils/auth/user';

const takenUsernames = [];
let inputValues = {};

export default (Component) => {
  // Wrapper to do an on mount validation
  class RenderComponent extends React.Component {
    componentDidMount() {
      // Validate the form on load
      this.props.formik.validateForm();
      // Check the username to see if it already exists
      this.props.formik.setFieldTouched('username');
    }
    render() {
      return <Component />;
    }
  }
  return withFormik({
    // Default to data passed in on account creation
    // Since component is remounted due to loading bar, must also store form values
    // Form values will take precedence over default values
    mapPropsToValues: props => _.assign({}, props.data, inputValues),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
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
    handleSubmit: (values, { props }) => {
      // Display the loader
      props.setLoading(true);
      // Trimmed input values
      const trimmedValues = _.mapValues(values, value => _.trim(value));
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
        variables: trimmedValues,
        success: () => {
          // Update the user's information in the state
          updateUser(trimmedValues);
          // Redirect the user to their profile
          push('/profile');
        },
        error: (errors) => {
          // Set error if the username already exists
          if (errors[0].name == 'UsernameAlreadyExists') {
            // Append the trimmed username
            takenUsernames.push(_.toLower(trimmedValues.username));
            // Update the form state, necessary because the component remounts
            inputValues = trimmedValues;
          }
          // Hide the loader
          props.setLoading(false);
        },
      });
    },
  })(
    // Inject formik props
    connect(RenderComponent)
  );
};
