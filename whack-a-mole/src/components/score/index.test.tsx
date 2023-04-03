import { screen } from "@testing-library/react";
import { Score } from ".";
import { renderWithProviders } from "../../test-utils/utils";
import { IData } from "../../models";
import { fetchStatus } from "../../constants";

describe('Score component', () => {
    let preloadStateValue: IData;

    beforeEach(() => {
        preloadStateValue = {
            leaderBoards: [],
            gameData: {
                name: '',
                points: 10,
                isGameActive: false
            },
            fetchStatus: fetchStatus.Success
        }
    })

    it('should display game selector points value', () => {
        renderWithProviders(<Score />, { preloadedState: { game: preloadStateValue } })
        const scorePoints = screen.getByRole('note');
        expect(scorePoints.textContent).toBe('10');
    })
}) 