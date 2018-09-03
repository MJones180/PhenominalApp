import gql from 'graphql-tag';
import query from 'utils/graphql/query';
import PersonalFrag from './Personal/frag';
import PreferencesFrag from './Preferences/frag';

export default Component => (
  () => (
    query({
      query: gql`
        query {
          currentUser {
            ...SettingsPersonal
            ...SettingsPreferences
          }
          ${PersonalFrag}
          ${PreferencesFrag}
        }
      `,
      Component,
    })
  )
);
