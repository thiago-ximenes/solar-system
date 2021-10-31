import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <Container>
          <Row className="container justify-content-md-center">
            {
              Planets
                .map(
                  (
                    { name, image },
                  ) => (<PlanetCard
                    key={ name }
                    planetImage={ image }
                    planetName={ name }
                  />),
                )
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default SolarSystem;
