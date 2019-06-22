import { connect, withFormik } from 'formik';
import * as yup from 'yup';

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
    handleSubmit: async (values) => {
      // Trimmed email
      console.log('Values: ', values);
    },
  })(
    // Inject formik props
    connect(Component)
  )
);
