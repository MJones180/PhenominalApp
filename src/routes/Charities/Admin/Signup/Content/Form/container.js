import { connect, withFormik } from 'formik';
import _ from 'lodash';
import * as yup from 'yup';
import createAlert from 'components/Alert';
import Mutation from 'utils/graphql/mutation';
import createCharity from './createCharity.graphql';
import sendAuthLink from './sendAuthLink.graphql';

export default Component => (
  withFormik({
    // The base input values
    mapPropsToValues: () => ({
      ein: '',
      email: '',
      name: '',
      representative: '',
      url: '',
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        ein: yup.string().required('Required field.').trim().matches(/^[1-9]\d?-\d{7}$/, 'Must be in the format 12-3456789.'),
        email: yup.string().required('Required field.').trim().email('Email is invalid.'),
        name: yup.string().required('Required field.').trim(),
        representative: yup.string().required('Required field.').trim(),
        url: yup.string().required('Required field.').trim().url('Must be in the format https://example.com'),
      })
    ),
    handleSubmit: async (values, { props, setSubmitting }) => {
      // Trimmed input values
      const trimmedValues = _.mapValues(values, value => _.trim(value));
      // Create the charity
      Mutation({
        mutation: createCharity,
        variables: trimmedValues,
        success: () => {
          // Send the authLink email
          Mutation({
            mutation: sendAuthLink,
            variables: trimmedValues,
            success: () => {
              // Update the UI
              props.setEmail(values.email);
            },
            error: () => {
              createAlert().error();
            },
          });
        },
        error: () => {
          createAlert().error('Email or charity EIN already exists.');
          // Enable the submit button again
          setSubmitting(false);
        },
      });
    },
  })(
    // Inject formik props
    connect(Component)
  )
);
