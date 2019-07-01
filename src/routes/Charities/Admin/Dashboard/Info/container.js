import { withFormik } from 'formik';
import * as yup from 'yup';

// Grab the current user's data
export default Component => (
  withFormik({
    // Grab the base input values
    mapPropsToValues: ({ data }) => ({
      name: '',
      acronym: '',
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        amount: yup.number().moreThan(0, 'Please input an amount.'),
        checkedEvent: yup.string().required('Please select a charity.'),
      })
    ),
    handleSubmit: () => {
      console.log('Hello');
    },
  })(Component)
);
