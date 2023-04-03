import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './styles.module.css';
import { IUserRecord } from "../../models";
import { fetchLeaderboard } from "../../services/leader-board";
import { ThunkDispatch } from "@reduxjs/toolkit";


export const LeaderBoard: React.FC = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const leaderBoards: IUserRecord[] = useSelector((state: any) => state.game.leaderBoards)
    useEffect(() => {
        dispatch(fetchLeaderboard())
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
                    {leaderBoards.map((member, i) =>
                        <li key={`${member.name}-${i}`} className={styles.recordRow}>
                            <span className={styles.spanTitle}>{`${i + 1}-${member.name}`}</span>
                            <span className={styles.spanContent}>{member.points}</span>
                        </li>)}
                </ul>) : (<span className={styles.tittleL}>Sorry we don't have any record yet. Would you like to be the first.</span>)
            }
        </div >
    )
} 