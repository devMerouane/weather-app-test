import React from 'react';
import { render, screen } from '@testing-library/react';

import Loader from './loader.component';

describe('Loader component', () => {
  it('should render the component', () => {
    render(<Loader />);

    const loaderElement = screen.getByText(/Loading .../i);
    expect(loaderElement).toBeInTheDocument();
  });
});
