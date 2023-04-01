import { useDispatch, useSelector } from "react-redux";
import { resetGame, setIsGameActive } from "../../../data/slices";

export const useHeader = () => {
    const isGameActive = useSelector((state: any) => state.game.isGameActive);
    const dispatch = useDispatch();

    const handleStartGame = () => {
        dispatch(setIsGameActive(true))
        dispatch(resetGame())
    }

    const handleResetGame = () => {
        dispatch(resetGame())
        dispatch(setIsGameActive(false))
    }
    return { isGameActive, handleStartGame, handleResetGame }
}