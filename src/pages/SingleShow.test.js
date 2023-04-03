/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import SingleShow from './SingleShow';
import { singleShow } from '../stubs/tvmaze';
import { act } from 'react-dom/test-utils';

jest.mock("../components/Header");

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(singleShow)
    })
});

afterEach(() => {
    jest.restoreAllMocks();
});

describe('show', () => {
    it("renders single show name", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => render(<SingleShow />));
        const name = screen.getByText('Under the Dome')
        expect(name).toBeInTheDocument();
    });
})