import React from 'react';
import { Redirect } from 'react-router-dom';
import gql from 'graphql-tag';
import query from 'utils/graphql/query';
import AboutFrag from './About/frag';
import BannerFrag from './Banner/frag';
import ExpensesFrag from './Expenses/frag';
import HistoryFrag from './History/frag';

export default Component => (
  ({ match }) => {
    const RenderComponent = ({ data }) => (
      // Verify the charity exists
      data.charity ? <Component data={data} /> : <Redirect to="/charities" />
    );

    return query({
      query: gql`
        query(
          $ein: String
        ) {
          charity(where: {
            ein: $ein
          }) {
            ...CharityAbout
            ...CharityBanner
            ...CharityExpenses
          }
          eventsPast(charityEIN: $ein) {
            ...CharityHistory
          }
          ${AboutFrag}
          ${BannerFrag}
          ${ExpensesFrag}
          ${HistoryFrag}
        }
      `,
      variables: {
        ein: match.params.charityEIN,
      },
      Component: RenderComponent,
    });
  }
);
