import GoogleAnalytics from 'react-ga';
import { withRouter } from 'react-router-dom';
import { analyticsKey } from 'utils/keys';

// Startup Google Analytics
if (__PROD__) GoogleAnalytics.initialize(analyticsKey);

// Listen for route changes
export default withRouter(({ location: { pathname } }) => {
  // Only use analytics in production
  if (__PROD__) {
    // Update the current page
    GoogleAnalytics.set({ page: pathname });
    GoogleAnalytics.pageview(pathname);
  }
  // Necessary for a valid React component
  return false;
});
