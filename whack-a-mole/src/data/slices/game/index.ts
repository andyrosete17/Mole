import { createSlice } from "@reduxjs/toolkit"

export interface IGameData {
    name: string
    points: number
    isGameActive: boolean
}

export const initialGameState: IGameData =
{
    name: '',
    points: 0,
    isGameActive: false
}

export const gameSlice = createSlice({
    initialState: initialGameState,
    name: 'game',
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setIsGameActive: (state, action) => {
            state.isGameActive = action.payload;
        },
        addPoints: (state) => {
            state.points += 10;
        },
        resetGame: (state) => {
            state.points = initialGameState.points
        }
    }
})

export const { setName, addPoints, resetGame, setIsGameActive } = gameSlice.actions;
