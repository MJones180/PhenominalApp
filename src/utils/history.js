import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default history;

// Redirect programmatically
export const push = location => history.push(location);
