import gql from 'graphql-tag';

export default gql`
  fragment CharityAbout on Charity {
    ein
    location
    mission
    name
    phoneNumber
    website
    updatedAt
  }
`;
