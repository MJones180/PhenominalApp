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
      mapPropsToValues: ({ data: { charity } }) => ({
        acronym: charity.acronym,
        banner: charity.banner,
        bannerCredit: charity.bannerCredit,
        email: charity.email,
        expensesAdministrative: charity.expensesAdministrative,
        expensesFundraising: charity.expensesFundraising,
        expensesOther: charity.expensesOther,
        expensesProgram: charity.expensesProgram,
        expensesUpdated: charity.expensesUpdated,
        location: charity.location,
        logo: charity.logo,
        mission: charity.mission,
        name: charity.name,
        phoneNumber: charity.phoneNumber,
        representative: charity.representative,
        website: charity.website,
      }),
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
        console.log('values: ', values);
        const diff = _.omitBy(values, (v, k) => originalValues[k] === v);
        const token = get.charityAuth();
        console.log('diff: ', diff);
        setSubmitting(false);
        Mutation({
          mutation,
          variables: {
            token,
            ...diff,
          },
          success: () => {
            createAlert().success();
          },
          error: () => {
            createAlert().error();
            // Enable the submit button again
            setSubmitting(false);
          },
        });
      },
    })(Component)
  );
  return ein => <Query query={query} variables={ein} Component={RenderComponent} />;
};
