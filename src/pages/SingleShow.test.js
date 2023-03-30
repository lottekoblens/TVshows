/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import SingleShow from './SingleShow';
import { singleShow } from '../stubs/tvmaze';
import { act } from 'react-dom/test-utils';

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(singleShow)
    })
});

afterEach(() => {
    jest.restoreAllMocks();
});

test('renders singleshow of under the dome', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(<SingleShow />));
    const element = screen.getByText('Under the Dome');
    expect(element).toBeInTheDocument();
});
