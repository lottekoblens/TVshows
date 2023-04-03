/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import SingleShow from './SingleShow';
import { singleShow } from '../stubs/tvmaze';
import { act } from 'react-dom/test-utils';
import striptags from 'striptags';

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

describe('show', () => {
    it("renders single show language", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => render(<SingleShow />));
        const language = screen.getByText('Language:')
        expect(language).toBeInTheDocument();
    });
})

describe('show', () => {
    it("renders single show rating", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => render(<SingleShow />));
        const rating = screen.getByText('6.5')
        expect(rating).toBeInTheDocument();
    });
})

describe('show', () => {
    it("renders single show status", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => render(<SingleShow />));
        const status = screen.getByText('Ended')
        expect(status).toBeInTheDocument();
    });
})

describe('show', () => {
    it("renders single show summary", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => render(<SingleShow />));
        const summary = screen.getByText(striptags(singleShow.summary))
        expect(summary).toBeInTheDocument();
    });
})


describe('show', () => {
    it("renders single show image", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => render(<SingleShow />));
        const image = screen.getByAltText('Cover image for Under the Dome')
        expect(image).toBeInTheDocument();
    });
})