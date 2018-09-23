import { initialize, pageview } from 'react-ga';
import { withRouter } from 'react-router-dom';
import { analyticsKey } from 'utils/keys';

// Listen for route changes
export default withRouter(({ location: { pathname } }) => {
  // Only use analytics in production
  if (__PROD__) {
    // Startup Google Analytics
    initialize(analyticsKey);
    // Update the current page
    pageview(pathname);
  }
  // Necessary for a valid React component
  return false;
});
