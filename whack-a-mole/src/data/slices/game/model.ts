export interface IGameData {
    name: string
    points: number
    isGameActive: boolean
}

export interface IUserRecord {
    name: string
    points: number
}

export interface IData {
    gameData: IGameData,
    leaderBoards: IUserRecord[]
}

export const initialGameState: IData =
{
    gameData: {
        name: '',
        points: 0,
        isGameActive: false
    },
    leaderBoards: [{ name: '', points: 0 }]
}