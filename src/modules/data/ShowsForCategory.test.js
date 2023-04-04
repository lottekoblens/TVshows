/* eslint-disable testing-library/no-node-access */
import { allShows } from '../../stubs/tvmaze';
import CategorisedShows from './ShowsForCategory';

const { props } = require('./ShowsForCategory');

beforeEach(() => {
    props.mockResolvedValue(allShows);
    result = CategorisedShows();
});

describe('Data should be filtered', () => {
    it('Data should contain Californication', () => {
        expect(result).toContain('Californication')
    });
});