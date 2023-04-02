import { useSelector } from 'react-redux'
import styles from './styles.module.css'

export const Score: React.FC = () => {
    const scorePoints = useSelector((state: any) => state.game.gameData.points)
    return (
        <section aria-label='score' className={styles.root}>
            <div className={styles.container}>
                <span>SCORE:</span>
                <span role='note'>{scorePoints}</span>
            </div>
        </section> 
    )
}