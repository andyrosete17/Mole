import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeaderBoard } from "../../data/slices";
import { IUserRecord } from "../../data/slices/game/model";
import styles from './styles.module.css';


export const LeaderBoard: React.FC = () => {
    const list = [{ name: 'andy', point: 10 }, { name: 'andy', point: 120 }]
    const dispatch = useDispatch();
    const leaderBoards: IUserRecord[] = useSelector((state: any) => state.game.leaderBoards)

    useEffect(() => {
        dispatch(getLeaderBoard())
    }, [dispatch])


    return (
        <div className={styles.root}>
            <span className={styles.tittleXL}>Leaderboard</span>
            {leaderBoards?.length > 0 ?
                (<ul className={styles.container}>
                    <li className={styles.recordRow}>
                        <span className={styles.spanTitle}>Player</span>
                        <span className={styles.spanContent}>Score</span>
                    </li>
                    {[...leaderBoards].sort((x, y) => y.points - x.points).slice(0, 10).map((member, i) =>
                        <li key={`${member.name}-${i}`} className={styles.recordRow}>
                            <span className={styles.spanTitle}>{`${i + 1}-${member.name}`}</span>
                            <span className={styles.spanContent}>{member.points}</span>
                        </li>)}
                </ul>) : (<span className={styles.tittleL}>Sorry we don't have any record yet. Would you like to be the first.</span>)
            }
        </div >
    )
} 