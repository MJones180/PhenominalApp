import frag from './frag';

export default Component => (
  ({ profileQuery }) => profileQuery(frag, Component)
);
