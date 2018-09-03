import gql from 'graphql-tag';

export default gql`
  fragment CharitiesCurrent on Event {
    id
    endDate
    goal
    multiplier
    sponsorName
    sponsorWebsite
    charity {
      acronym
      bannerCredit
      ein
      mission
      name
      website
    }
    specialFundraiser {
      description
      name
    }
  }
`;
