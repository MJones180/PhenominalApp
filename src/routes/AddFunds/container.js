import React from 'react';

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.setParentState = this.setParentState.bind(this);
      // Initial State
      this.state = {
        processing: false,
        results: null,
      };
    }
    setParentState(obj) {
      this.setState(pastState => ({
        ...pastState,
        ...obj,
      }));
    }
    render() {
      return (
        <Component
          setParentState={this.setParentState}
          {...this.state}
        />
      );
    }
  }
);
