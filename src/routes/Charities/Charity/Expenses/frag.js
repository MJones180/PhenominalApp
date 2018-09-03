import gql from 'graphql-tag';

export default gql`
  fragment CharityExpenses on Charity {
    expensesProgram
    expensesAdministrative
    expensesFundraising
    expensesOther
  }
`;
