// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TVShow app', () => {
  render(<App />);
  const linkElement = screen.getByText(/TV Shows/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders main div correctly', () => {
  render(<App />);
  const mainDiv = document.getElementById('mainDiv');
  expect(mainDiv).toBeInTheDocument();
});