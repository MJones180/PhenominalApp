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

// Currently saved data
let savedData = null;

export default (Component) => {
  const RenderComponent = (
    withFormik({
      // Prefill input values
      mapPropsToValues: ({ data: { charity } }) => {
        // Set default upload images
        if (!charity.banner) charity.banner = 'assets/DefaultUploadBanner.jpg';
        if (!charity.logo) charity.logo = 'assets/DefaultUploadBannerHalved.jpg';
        // Convert all null values to an empty string
        _.each(charity, (val, key) => {
          if (_.isNull(val)) charity[key] = '';
        });
        return charity;
      },
      validationSchema: () => (
        yup.object().shape({
          email: yup.string().required('Required field.').trim().email('Email is invalid.'),
          name: yup.string().required('Required field.').trim(),
          representative: yup.string().required('Required field.').trim(),
          website: yup.string().required('Required field.').trim().url('Must be in the format https://example.com'),
        })
      ),
      handleSubmit: async (values, { props, setSubmitting }) => {
        // Check if the saved data has been set yet
        if (!savedData) savedData = props.data.charity;
        // Only update the fields that have changed
        const updatedFields = _.omitBy(values, (value, key) => savedData[key] === value);
        // Only update if there is unsaved data
        if (!_.isEmpty(updatedFields)) {
          const alert = createAlert('Updating charity information.');
          Mutation({
            mutation,
            variables: {
              // Charity auth token in cookie
              token: get.charityAuth(),
              ...updatedFields,
            },
            success: () => {
              alert.success('Charity information updated.');
              // Enable the submit button again
              setSubmitting(false);
              // Update the saved data
              savedData = _.assign(savedData, updatedFields);
            },
            error: () => {
              alert.error();
              setSubmitting(false);
            },
          });
        } else {
          createAlert().success('Already up to date.');
          setSubmitting(false);
        }
      },
    })(Component)
  );
  return ein => <Query query={query} variables={ein} Component={RenderComponent} />;
};
