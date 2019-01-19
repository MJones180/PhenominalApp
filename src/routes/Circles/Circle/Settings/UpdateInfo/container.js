import { withFormik } from 'formik';
import _ from 'lodash';
import * as yup from 'yup';
import Mutation from 'utils/graphql/mutation';
import { push } from 'utils/history';
import createAlert from 'components/Alert';
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
      const alert = createAlert('Updating the Circle.');
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
          alert.success('Circle information updated.');
          // Reload the page, simplest way to keep all of the data synced
          push();
        },
        error: () => {
          // Enable the button
          setSubmitting(false);
          alert.error();
        },
      });
    },
  })(Component)
);
