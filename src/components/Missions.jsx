import React, { Component } from 'react';
import Title from './Title';

class Missions extends Component {
  render() {
    // const { headline } = this.props;

    return (
      <div data-testid="missions">
        <Title headline="Missões" />
      </div>
    );
  }
}

export default Missions;
