import { gameSlice } from "."
import { initialGameState } from "./model";

describe('game slice', () => {
    const initialState = initialGameState;

    it('should set the name when setName action is dispatched', () => {
        const newName = 'andy'
        const action = gameSlice.actions.setName(newName);
        const newState = gameSlice.reducer(initialState, action);
        expect(newState.gameData.name).toEqual(newName)
    })

    it('should set is game has started when setIsGameActive action is dispatched', () => {
        const isGameActive = true;
        const action = gameSlice.actions.setIsGameActive(isGameActive);
        const newState = gameSlice.reducer(initialState, action);
        expect(newState.gameData.isGameActive).toBeTruthy();
    })

    it('should add point when addPoints action is dispatched', () => {
        const action = gameSlice.actions.addPoints;
        const newState = gameSlice.reducer(initialState, action);
        expect(newState.gameData.points).toEqual(10)
    })

    it('should reset state when resetGame action is dispatched', () => {
        const action = gameSlice.actions.resetGame;
        const newState = gameSlice.reducer(initialState, action);
        expect(newState).toEqual(initialState)
    })
})