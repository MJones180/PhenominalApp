import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuth } from 'utils/auth/user';

// Load routes asynchronously
class AsyncRoute extends React.Component {
  state = {
    mod: null,
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null,
    });
    props.load().then((mod) => {
      this.setState({
        mod: mod.default,
      });
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}

// Wrapper to make a Route async
export default ({ exact, path, requireAuth, mod }) => {
  // Make sure the user is authenticated if the page is protected
  // Redirect to signin if the user is not
  if (requireAuth && !isAuth()) return <Redirect to="/signin" />;
  return (
    <Route
      exact={exact}
      path={path}
      render={props => (
        <AsyncRoute load={mod}>
          { Comp => <Comp {...props} /> }
        </AsyncRoute>
      )}
    />
  );
};
