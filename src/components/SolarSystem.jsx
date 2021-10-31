import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          Planets
            .map(
              (
                { name, image },
              ) => <PlanetCard key={ name } planetImage={ image } planetName={ name } />,
            )
        }
      </div>
    );
  }
}

export default SolarSystem;
