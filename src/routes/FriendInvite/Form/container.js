import { withFormik } from 'formik';
import * as yup from 'yup';
import Mutation from 'utils/graphql/mutation';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  withFormik({
    // The base input values
    mapPropsToValues: () => ({
      email: '',
      message: 'Phenominal is a platform with no minimum donation. Come create an account and donate to charities today!',
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        email: yup.string().required('Required field.').email('Email is invalid.'),
        message: yup.string().required('Required field.'),
      })
    ),
    handleSubmit: (values, { resetForm }) => {
      const alert = createAlert('Sending invite.');
      Mutation({
        mutation,
        variables: values,
        success: () => {
          // Reset the form
          resetForm();
          alert.success('Invite sent.');
        },
        error: () => alert.error(),
      });
    },
  })(Component)
);
