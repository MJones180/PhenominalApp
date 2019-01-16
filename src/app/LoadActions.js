import React from 'react';
import createAlert from 'components/Alert';

// Some good alert tests
const sendAlert = async () => {
  createAlert().default('Default test.');
  createAlert().error('Error test.');
  createAlert().special('Special test.');
  createAlert().error();
};

// Written as a React class so it is only executed on mount
export default class extends React.Component {
  componentDidMount() {
    sendAlert();
  }
  render() {
    return false;
  }
}
