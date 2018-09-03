import gql from 'graphql-tag';

export default gql`
  fragment SettingsPreferences on User {
    preferences {
      allowDonationEmails
    }
  }
`;
