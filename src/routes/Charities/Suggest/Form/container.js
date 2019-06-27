import { withFormik } from 'formik';
import * as yup from 'yup';
import { push } from 'utils/history';
import Mutation from 'utils/graphql/mutation';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  withFormik({
    // The base input values
    mapPropsToValues: () => ({
      email: '',
      name: '',
      ein: '',
      url: '',
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        email: yup.string().required('Required field.').email('Email is invalid.'),
        name: yup.string().required('Required field.'),
      })
    ),
    handleSubmit: (values) => {
      const alert = createAlert('Sending suggestion.');
      Mutation({
        mutation,
        variables: values,
        success: () => {
          // Route the user back to the charities
          push('/charities');
          alert.success('Charity suggestion sent.');
        },
        error: () => alert.error(),
      });
    },
  })(Component)
);
