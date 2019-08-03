import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { currency } from 'utils/number';
import { compactDate } from 'utils/time';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const Container = ({ data: { currentUser, currentUserBalance: balance } }) => {
    const expirations = _.map(currentUser.funds, ({ amountNet, createdAt, donations }) => {
      const amount = donations.length ? donations[0].chargeBalance : amountNet;
      const expiration = moment(createdAt).add(80, 'days').toISOString();
      const days = moment(expiration).diff(moment(), 'days');
      return {
        amount: currency(amount),
        days,
        expiration: compactDate(expiration),
      };
    });
    return <Component balance={currency(balance)} expirations={expirations} />;
  };
  return () => Query({
    query,
    Component: Container,
  });
};
