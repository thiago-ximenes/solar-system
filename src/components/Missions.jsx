import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <Container>
          <Row>
            { missions
              .map(
                (
                  { name, year, country, destination },
                ) => (
                  <MissionCard
                    key={ name }
                    name={ name }
                    year={ year }
                    country={ country }
                    destination={ destination }
                  />
                ),
              )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Missions;
