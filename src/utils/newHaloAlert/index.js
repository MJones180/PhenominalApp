import createAlert from 'components/Alert';
import { simple } from 'utils/graphql/query';
import query from './query.graphql';

export default () => (
  // Check if any new Halos have been completed
  simple({ query })
    .then(({ data: { newHaloAlert } }) => {
      // If there is a new Halo, alert the user
      if (newHaloAlert) createAlert().special('You completed a Halo!');
    })
);
