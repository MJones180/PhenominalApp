import React from 'react';
import _ from 'lodash';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { get } from 'utils/storage';
import Mutation from 'utils/graphql/mutation';
import Query from 'utils/graphql/query';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = (
    withFormik({
      mapPropsToValues: ({ data: { charity } }) => charity,
      validationSchema: () => (
        yup.object().shape({
          email: yup.string().required('Required field.').trim().email('Email is invalid.'),
          name: yup.string().required('Required field.').trim(),
          representative: yup.string().required('Required field.').trim(),
          website: yup.string().required('Required field.').trim().url('Must be in the format https://example.com'),
        })
      ),
      handleSubmit: async (values, { props, setSubmitting }) => {
        const originalValues = props.data.charity;
        console.log('originalValues: ', originalValues);
        console.log('values: ', values);
        const diff = _.omitBy(values, (v, k) => originalValues[k] === v);
        const token = get.charityAuth();
        console.log('diff: ', diff);
        const alert = createAlert('Updating charity information.');
        Mutation({
          mutation,
          variables: {
            token,
            ...diff,
          },
          success: () => {
            alert.success('Charity information updated.');
            setSubmitting(false);
          },
          error: () => {
            // Alert the user that their account is updated
            alert.error();
            // Enable the submit button again
            setSubmitting(false);
          },
        });
      },
    })(Component)
  );
  return ein => <Query query={query} variables={ein} Component={RenderComponent} />;
};
