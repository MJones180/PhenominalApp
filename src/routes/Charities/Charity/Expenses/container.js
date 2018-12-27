import React from 'react';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { charity: {
    expensesProgram: p,
    expensesAdministrative: a,
    expensesFundraising: f,
    expensesOther: o,
    expensesUpdated: u,
  } } }) => <Component p={p} a={a} f={f} o={o} u={u} />;
  return ein => <Query query={query} variables={ein} Component={RenderComponent} />;
};
