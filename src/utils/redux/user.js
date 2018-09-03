export default (state = {}, { type, payload }) => {
  // The user reducers, grab the correct one with the type
  const reducer = {
    UPDATE_USER: () => ({ ...state, ...payload }),
    REMOVE_USER: () => ({}),
  }[type];
  // Only call the function if it exists, default to the state
  return reducer ? reducer() : state;
};
