import { gameSlice } from "."
import { initialGameState } from "../../../models";
import { fetchLeaderboard } from "../../../services/leader-board";

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

    it('should return fetchLeaderboard payload whe action is fullfiled', () => {
        const data = [
            {
                "id": "1",
                "name": "denise",
                "points": 160
            },
            {
                "id": "2",
                "name": "mike",
                "points": 200
            },
            {
                "id": "3",
                "name": "robert",
                "points": 120
            },
            {
                "id": "4",
                "name": "susan",
                "points": 50
            }];

        const action = {
            type: fetchLeaderboard.fulfilled,
            payload: data,
        };
        const newState = gameSlice.reducer(initialState, action);
        expect(newState.leaderBoards).toEqual([
            { name: 'mike', points: 200 },
            { name: 'denise', points: 160 },
            { name: 'robert', points: 120 },
            { name: 'susan', points: 50 }
        ])
    })

    it('should return fetchLeaderboard payload with max 10 rows whe action is fullfiled', () => {
        const data = Array(12).fill({
            "id": "1",
            "name": "denise",
            "points": 160
        });

        const action = {
            type: fetchLeaderboard.fulfilled,
            payload: data,
        };
        const newState = gameSlice.reducer(initialState, action);
        expect(newState.leaderBoards.length).toEqual(10)
    })
}) 