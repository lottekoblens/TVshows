/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react';
import App from './App';

test('renders main div correctly', () => {
  render(<App />);
  const mainDiv = document.getElementById('mainDiv');
  expect(mainDiv).toBeInTheDocument();
});