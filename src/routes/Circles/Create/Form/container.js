import { withFormik } from 'formik';
import * as yup from 'yup';
import Mutation from 'utils/graphql/mutation';
import { push } from 'utils/history';
import { createAlert } from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  withFormik({
    // The base input values
    mapPropsToValues: () => ({
      description: '',
      name: '',
      open: true,
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        description: yup.string().nullable().trim().max(250, 'Max length of paragraph is 250 characters.'),
        name: yup.string().required('Required field.').trim().max(30, 'Maximum of 30 characters.'),
        open: yup.boolean(),
      })
    ),
    handleSubmit: (values) => {
      Mutation({
        mutation,
        variables: values,
        success: ({ createCircle: circleID }) => {
          // Alert the user that the Circle was created
          createAlert({
            text: 'Circle created.',
            type: 'success',
          });
          // Redirect to the new Circle's page
          push(circleID);
        },
        error: () => {
          createAlert({
            text: 'An error has occurred.',
            type: 'error',
          });
        },
      });
    },
  })(Component)
);
