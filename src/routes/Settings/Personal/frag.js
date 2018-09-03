import gql from 'graphql-tag';

export default gql`
  fragment SettingsPersonal on User {
    email
    nameFirst
    nameLast
  }
`;
