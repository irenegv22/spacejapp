import { planets } from '@/__mocks__/availablePlanets';
import { PlanetInfo } from '@/types/planetInfo';

//Get the planet info sending only the planet name
export const findPlanetByName = (name: string): PlanetInfo | null => {
  const planet = planets.find(planet => planet.name.toLowerCase() === name.toLowerCase());

  if (planet) {
    return {
      name: planet.name,
      imageUrl: planet.imageUrl,
      accessibilityLabel: planet.accessibilityLabel,
      id: planet.id,
    };
  } else {
    return null;
  }
};
