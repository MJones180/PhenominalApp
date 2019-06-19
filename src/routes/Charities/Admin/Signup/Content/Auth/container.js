import _ from 'lodash';
import { connect, withFormik } from 'formik';
import * as yup from 'yup';
import Mutation from 'utils/graphql/mutation';
import { simple } from 'utils/graphql/query';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';
import query from './query.graphql';

export default Component => (
  withFormik({
    // The base input values
    mapPropsToValues: () => ({
      email: '',
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        email: yup.string().required('Required field.').trim().email('Email is invalid.'),
      })
    ),
    handleSubmit: async (values, { props, setFieldError, setSubmitting }) => {
      // Trimmed email
      const email = _.trim(values.email);
      // Check if the email exists
      simple({
        query,
        variables: { email },
      }).then(({ data: { charities } }) => {
        // Valid charity email
        if (charities[0]) {
          // Send the authLink email
          Mutation({
            mutation,
            variables: { email },
            success: () => {
              // Update the UI
              props.setEmail(email);
            },
            error: () => {
              createAlert().error();
            },
          });
        } else {
          createAlert().error('Email does not exist.');
          // Update field error
          setFieldError('email', 'Email does not exist');
          // Enable the submit button again
          setSubmitting(false);
        }
      });
    },
  })(
    // Inject formik props
    connect(Component)
  )
);
