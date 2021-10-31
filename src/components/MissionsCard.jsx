import React, { Component } from 'react';
import Title from './Title';

class MissionsCard extends Component {
  render() {
    // const { headline } = this.props;

    return (
      <div data-testid="missions">
        <Title headline="Missões" />
      </div>
    );
  }
}

// Missions.propTypes = {
//   headline: PropTypes.string.isRequired,
// };

export default Missions;
