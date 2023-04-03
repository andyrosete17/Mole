import { createSlice } from "@reduxjs/toolkit"
import { fetchLeaderboard, saveUserRecord } from "../../../services/leader-board";
import { initialGameState } from "../../../models";
import { mapToCollection } from "../../../adapters/map-collection";
import { mapLeaderboardFromApiToVm } from "../../../adapters/leaderboard";
import { fetchStatus } from "../../../constants";

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
        }
    }, extraReducers: (builder) => {
        builder.addCase(fetchLeaderboard.fulfilled, (state, action) => {
            state.fetchStatus = fetchStatus.Success;
            const result = mapToCollection(action.payload, mapLeaderboardFromApiToVm);
            state.leaderBoards = result.sort((x, y) => y.points - x.points).slice(0, 10);
        }).addCase(fetchLeaderboard.pending, (state) => {
            state.fetchStatus = fetchStatus.Pending
        }).addCase(fetchLeaderboard.rejected, (state) => {
            state.fetchStatus = fetchStatus.Rejected
        }).addCase(saveUserRecord.fulfilled, (state, action) => {
            state.fetchStatus = fetchStatus.Success
            fetchLeaderboard();
        }).addCase(saveUserRecord.pending, (state) => {
            state.fetchStatus = fetchStatus.Pending
        }).addCase(saveUserRecord.rejected, (state) => {
            state.fetchStatus = fetchStatus.Rejected
        })
    }
})

export const { setName, addPoints, resetGame, setIsGameActive } = gameSlice.actions;
