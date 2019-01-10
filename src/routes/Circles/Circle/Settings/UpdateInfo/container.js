import { withFormik } from 'formik';
import _ from 'lodash';
import * as yup from 'yup';
import Mutation from 'utils/graphql/mutation';
import { updatableAlert } from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  withFormik({
    // The base input values
    mapPropsToValues: props => ({
      id: props.id,
      description: props.description,
      open: props.open,
    }),
    // Validate the data
    validationSchema: () => (
      yup.object().shape({
        description: yup.string().nullable().trim().max(250, 'Max length of paragraph is 250 characters.'),
        open: yup.boolean(),
      })
    ),
    handleSubmit: ({ id, description, open }, { setSubmitting }) => {
      // Alert the user that their account is being updated
      const updateAlert = updatableAlert('Creating the Circle.');
      Mutation({
        mutation,
        variables: {
          id,
          description: _.trim(description),
          open,
        },
        success: () => {
          // Enable the button
          setSubmitting(false);
          // Alert the user that the Circle was created
          updateAlert({
            updatedText: 'Circle information updated.',
          });
        },
        error: () => {
          // Enable the button
          setSubmitting(false);
          // Alert the user that an error has occured
          updateAlert({
            type: 'error',
            updatedText: 'An error has occured, please try again soon.',
          });
        },
      });
    },
  })(Component)
);
