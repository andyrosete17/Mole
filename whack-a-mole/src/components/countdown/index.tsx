import Countdown from "react-countdown"
import styles from './styles.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setIsGameActive } from "../../data/slices";
import { saveUserRecord } from "../../services/leader-board";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { IGameData } from "../../models";
import { gameDefaults } from "../../constants";

export const CountDownTimer = () => {

    const customEqual = (oldValue: IGameData, newValue: IGameData) => oldValue.isGameActive === newValue.isGameActive
    const { isGameActive, name, points } = useSelector((state: any) => state.game.gameData, customEqual);

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    // Renderer callback with condition
    const renderer = ({ minutes, seconds, completed, api }: any) => {
        isGameActive ? api.start() : api.stop();
        if (completed) {
            dispatch(setIsGameActive(false))
            if (points > 0) {
                dispatch(saveUserRecord({ name: name, points: points }))
            }
        } else {
            if (seconds < 10) {
                seconds = `0${seconds}`
            }
            // Render a countdown
            return (
                <div className={styles.countdown}>
                    <span>
                        0{minutes}:{seconds}
                    </span>
                </div>
            );
        }
    };

    return (
        <div className={styles.root}>
            <Countdown date={Date.now() + gameDefaults.gameTime} renderer={renderer} zeroPadTime={2} autoStart={false} />
        </div>
    )
}