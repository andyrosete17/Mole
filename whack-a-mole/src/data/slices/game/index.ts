import { createSlice } from "@reduxjs/toolkit"
import { initialGameState } from "./model";
import { usersResponseMock } from "../../../mocks/leaderBoards";

export const gameSlice = createSlice({
    initialState: initialGameState,
    name: 'game',
    reducers: {
        setName: (state, action) => {
            state.gameData.name = action.payload;
        },
        setIsGameActive: (state, action) => {
            state.gameData.isGameActive = action.payload;
        },
        addPoints: (state) => {
            state.gameData.points += 10;
        },
        resetGame: (state) => {
            state.gameData.points = initialGameState.gameData.points
        },
        setUserRecord: (state) => {
            console.log('calling the service with ', state.gameData.name, state.gameData.points);
        },
        getLeaderBoard: (state) => {
            state.leaderBoards = usersResponseMock
        }
    }
})

export const { setName, addPoints, resetGame, setIsGameActive, setUserRecord, getLeaderBoard } = gameSlice.actions;
