/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';
import { allShows } from '../stubs/tvmaze';
import { act } from 'react-dom/test-utils';

jest.mock("../components/Header");
jest.mock("../modules/data/ShowsForCategory");

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(allShows)
    })
});

afterEach(() => {
    jest.restoreAllMocks();
});

describe('show', () => {
    it("renders homepage title", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => render(<Homepage />));
        const title = screen.getByText('Our top rated tv shows')
        expect(title).toBeInTheDocument();
    });
})