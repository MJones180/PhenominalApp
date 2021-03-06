import { withFormik } from 'formik';
import _ from 'lodash';
import * as yup from 'yup';
import Mutation from 'utils/graphql/mutation';
import { push } from 'utils/history';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';

// Keep track of Circle names that have failed
const takenNames = [];

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
        name: yup.string().required('Required field.')
          .lowercase()
          .trim()
          .max(30, 'Maximum of 30 characters.')
          .notOneOf(takenNames, 'Circle name already taken.'),
        open: yup.boolean(),
      })
    ),
    handleSubmit: ({ description, name, open }, { setSubmitting, validateForm }) => {
      const alert = createAlert('Creating the Circle.');
      Mutation({
        mutation,
        variables: {
          description: _.trim(description),
          name: _.trim(name),
          open,
        },
        success: ({ createCircle: circleID }) => {
          alert.success('Circle created.');
          // Redirect to the new Circle's page
          push(circleID);
        },
        error: (errors) => {
          // Enable the button
          setSubmitting(false);
          // Set error if the Circle name already exists
          if (errors[0].name == 'CircleNameExists') {
            // Append the trimmed name
            takenNames.push(_.toLower(_.trim(name)));
            // Display error in form
            validateForm();
            // Alert user that Circle name already exists
            alert.error('Circle name already exists.');
          } else alert.error();
        },
      });
    },
  })(Component)
);
