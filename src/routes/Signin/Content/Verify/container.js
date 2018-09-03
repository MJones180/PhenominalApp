import { withFormik } from 'formik';
import * as yup from 'yup';
import gql from 'graphql-tag';
import mutation from 'utils/graphql/mutation';
import { push } from 'utils/history';
import { updateUser } from 'utils/auth/user';

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
    handleSubmit: (values, { props }) => {
      // Display the loader
      props.setLoading(true);
      // Send the mutation
      mutation({
        mutation: gql`
          mutation(
            $email: String!
            $nameFirst: String!
            $nameLast: String!
          ) {
            updateUserPersonal(
              email: $email
              nameFirst: $nameFirst
              nameLast: $nameLast
            )
          }
        `,
        variables: values,
        success: () => {
          // Update the user's information in the state
          updateUser(values);
          // Redirect the user to their profile
          push('/profile');
        },
        error: () => {
          // Redirect the user to their profile
          push('/profile');
        },
      });
    },
  })(Component)
);
