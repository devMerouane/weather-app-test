import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from './button.component';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Button component', () => {
  describe('Given disable equal to true', () => {
    it('should the button be disabled', () => {
      const onClickMock = jest.fn();
      render(<Button onClick={onClickMock} disable />);

      const buttonElement = screen.getByText(/Get weather/i);
      expect(buttonElement).toBeDisabled();
    });
    it('can not click on button', () => {
      const onClickMock = jest.fn();
      render(<Button onClick={onClickMock} disable />);

      const buttonElement = screen.getByText(/Get weather/i);

      fireEvent.click(buttonElement);
      expect(onClickMock).not.toHaveBeenCalled();
    });
  });
  describe('Given disable equal to false', () => {
    it('should the button be enbaled', () => {
      const onClickMock = jest.fn();
      render(<Button onClick={onClickMock} disable={false} />);

      const buttonElement = screen.getByText(/Get weather/i);
      expect(buttonElement).toBeEnabled();
    });
    it('can click on button', () => {
      const onClickMock = jest.fn();
      render(<Button onClick={onClickMock} disable={false} />);

      const buttonElement = screen.getByText(/Get weather/i);

      fireEvent.click(buttonElement);
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
