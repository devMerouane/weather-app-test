import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from './search.component';

describe('Search component', () => {
  it('should render the component', () => {
    const onChangeMock = jest.fn();
    render(<Search value="" onChange={onChangeMock} />);

    const inputElement =
      screen.getByPlaceholderText<HTMLInputElement>(/Enter the city/i);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('');
  });
});
