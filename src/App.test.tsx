import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
describe('App', () => {
  it('should render a layout', () => {
    render(<App />);

    const layoutElement = {
      header: screen.getByRole('banner', { name: 'header' }),
      sidebar: screen.getByRole('complementary', { name: 'sidebar' }),
      main: screen.getByRole('main')
    }

    expect(layoutElement.header).toBeInTheDocument();
    expect(layoutElement.sidebar).toBeInTheDocument();
    expect(layoutElement.main).toBeInTheDocument();
  });
});
