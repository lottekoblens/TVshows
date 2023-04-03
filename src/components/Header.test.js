/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { allShows } from '../stubs/tvmaze';
import { act } from 'react-dom/test-utils';

jest.mock("../modules/data/Search");

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(allShows)
    })
});

afterEach(() => {
    jest.restoreAllMocks();
});

describe('show', () => {
    it("renders header title", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => render(<Header />));
        const title = screen.getByText('Showflix')
        expect(title).toBeInTheDocument();
    });
})