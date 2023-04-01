import Countdown from "react-countdown"
import styles from './styles.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setIsGameActive } from "../../data/slices";

const gameDuration = process.env.REACT_APP_GAME_TIME as string;

export const CountDownTimer = () => {

    const isGameActive = useSelector((state: any) => state.game.isGameActive);
    const dispatch = useDispatch();


    // Renderer callback with condition
    const renderer = ({ minutes, seconds, completed, api }: any) => {
        console.log('game active===>', isGameActive)
        isGameActive ? api.start() : api.stop();
        if (completed) {
            dispatch(setIsGameActive(false))
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
            <Countdown date={Date.now() + parseInt(gameDuration) ?? 120000} renderer={renderer} zeroPadTime={2} autoStart={false} />
        </div>
    )
}