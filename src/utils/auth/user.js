import store from 'utils/redux';
import { connect } from 'react-redux';

// HOC wrapper for the current user
// Makes it easy to grab the state
export const currentUser = Component => (
  connect(
    ({ user }, passedProps) => ({ user, ...passedProps })
  )(Component)
);

// Dispatch state update for the user
export const updateUser = payload => store.dispatch({ type: 'UPDATE_USER', payload });

// Dispatch state reset for the user
export const removeUser = () => store.dispatch({ type: 'REMOVE_USER' });

// Check if the user is currently authenticated
export const isAuth = () => store.getState().user.id;
