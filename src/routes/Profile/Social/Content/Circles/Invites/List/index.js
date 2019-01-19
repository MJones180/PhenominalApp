import React from 'react';
import _ from 'lodash';
import Table from 'components/Table';
import Button from './Button';
import styles from './index.css';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // Bind `this` to all class functions, makes them callable
    this.click = this.click.bind(this);
    // Initial State
    this.state = {
      // Remove multiple invites from the same Circle
      data: _.intersectionBy(
        _.map(this.props.circleInvites, ({ circle: { id, name } }) => ({
          id,
          name,
          SORT_name: _.toLower(name),
        })), 'id'
      ),
    };
  }
  click(id) {
    const { data } = this.state;
    this.setState({
      // Remove row from list
      data: _.reject(data, row => row.id == id),
    });
  }
  render() {
    return (
      <Table
        columns={[{
          cellStyle: styles.name,
          field: 'name',
        }, {
          // Column to accept the invite
          cellContent: id => <Button join id={id} click={this.click} />,
          cellStyle: styles.join,
          disableSorting: true,
          field: 'join',
          key: 'id',
        }, {
          // Column to decline the invite
          cellContent: id => <Button id={id} click={this.click} />,
          cellStyle: styles.decline,
          disableSorting: true,
          field: 'decline',
          key: 'id',
        }]}
        data={this.state.data}
        defaultSort="SORT_name"
        fieldLink={{
          address: ({ id }) => `/circles/${id}`,
          fields: ['name'],
        }}
        uid={_.uniqueId('~')}
        emptyMessage="No Circle invites."
      />
    );
  }
}
