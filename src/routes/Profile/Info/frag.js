import gql from 'graphql-tag';

export default gql`
  fragment ProfileInfo on User {
    createdAt
    nameFirst
    nameLast
  }
`;
