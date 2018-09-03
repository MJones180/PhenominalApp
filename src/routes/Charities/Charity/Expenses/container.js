import React from 'react';

export default Component => (
  ({
    data: {
      expensesProgram: p,
      expensesAdministrative: a,
      expensesFundraising: f,
      expensesOther: o,
    },
  }) => <Component p={p} a={a} f={f} o={o} />
);
