import gql from 'graphql-tag';

export default gql`
  fragment CharityBanner on Charity {
    bannerCredit
    ein
    name
    acronym
  }
`;
