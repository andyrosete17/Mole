import { useState } from 'react'
import styles from './styles.module.css'
import { useHeader } from './hooks'

export const Header: React.FC = () => {
    const [name, setName] = useState('')
    const { handleStartGame, isGameActive, handleResetGame } = useHeader();
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        handleStartGame();
    }

    const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        handleResetGame();
    }

    const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.trim().length) {
            setName(e.target.value);
        }
    }

    return (
        <section role="grid" data-testid="section-header">
            <div className={styles.container}>
                <input type="text" className={styles.input} aria-label="Player name" placeholder="Insert your name and play" value={name} onChange={handleSetName} disabled={isGameActive} maxLength={25} />
                {isGameActive ? (
                    <button className={styles.button} onClick={(e) => handleReset(e)} aria-label="Reset the game">Reset</button>
                ) : (<button className={styles.button} onClick={(e) => handleSubmit(e)} disabled={!name || isGameActive} aria-label="Start the game">Start</button>
                )}
            </div>
        </section>
    )
}