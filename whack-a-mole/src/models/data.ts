import { IGameData } from "./game-data"
import { IUserRecord } from "./use-record"

export interface IData {
    gameData: IGameData,
    leaderBoards: IUserRecord[],
    fetchStatus: string,
}

export const initialGameState: IData =
{
    gameData: {
        name: '',
        points: 0,
        isGameActive: false
    },
    leaderBoards: [{ name: '', points: 0 }],
    fetchStatus: ''
}