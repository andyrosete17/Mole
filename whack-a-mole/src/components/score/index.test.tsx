import { screen } from "@testing-library/react";
import { Score } from ".";
import { renderWithProviders } from "../../test-utils/utils";

describe('Score component', () => {
    it('should display score equal to 0 when start game', () => {
        renderWithProviders(<Score />)
        const scorePoints = screen.getByRole('note');
        expect(scorePoints.textContent).toBe('0');
    })

    it('should display game selector points value', () => {
        const preloadStateValue =
        {
            name: '',
            points: 10
        }
        renderWithProviders(<Score />, { preloadedState: { game: preloadStateValue } })
        const scorePoints = screen.getByRole('note');
        expect(scorePoints.textContent).toBe('10');
    })
})