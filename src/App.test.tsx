import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn more link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn more/i);
  expect(linkElement).toBeInTheDocument();
});
