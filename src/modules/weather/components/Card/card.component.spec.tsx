import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './card.component';

describe('Card component', () => {
  describe('Given the data', () => {
    it('should display the card with data', () => {
      const dataMock = {
        city: 'London',
        description: 'Cloudy',
        temperature: 20,
        feelsLike: 20,
        wind: 10,
        humidity: 1,
        pressure: 2,
        icon: '01d.png',
      };

      render(<Card data={dataMock} />);
      const cityElement = screen.getByText(dataMock.city);
      const descriptionElement = screen.getByText(dataMock.description);
      const temperatureElement = screen.getByText(`${dataMock.temperature}°C`);
      const feelsLikeElement = screen.getByText(`${dataMock.feelsLike}C`);
      const windElement = screen.getByText(`${dataMock.wind}m/s`);
      const humidityElement = screen.getByText(`${dataMock.humidity}%`);
      const pressureElement = screen.getByText(`${dataMock.pressure}hPa`);
      const icon = screen.getByAltText('weather icon');

      expect(cityElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
      expect(temperatureElement).toBeInTheDocument();
      expect(feelsLikeElement).toBeInTheDocument();
      expect(windElement).toBeInTheDocument();
      expect(humidityElement).toBeInTheDocument();
      expect(pressureElement).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
    });
  });
});
