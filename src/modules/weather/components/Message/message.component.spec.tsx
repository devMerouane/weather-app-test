import React from 'react';
import { render, screen } from '@testing-library/react';

import Message from './message.component';

describe('Message component', () => {
  it('should render the component', () => {
    render(<Message message="message" type="error" />);

    const messageElement = screen.getByText(/message/i);
    expect(messageElement).toBeInTheDocument();
  });
});
