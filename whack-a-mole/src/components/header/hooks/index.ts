import { useDispatch, useSelector } from "react-redux";
import { resetGame, setIsGameActive, setName } from "../../../data/slices";
import { useState } from "react";

export const useHeader = () => {
    const [userName, setUserName] = useState('')
    const isGameActive = useSelector((state: any) => state.game.gameData.isGameActive);
    const dispatch = useDispatch();

    const handleStartGame = () => {
        dispatch(setIsGameActive(true))
        dispatch(setName(userName))
        dispatch(resetGame())
    }

    const handleResetGame = () => {
        dispatch(resetGame())
        dispatch(setIsGameActive(false))
    }
    return { isGameActive, handleStartGame, handleResetGame, userName, setUserName }
}