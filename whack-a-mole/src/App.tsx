import React from 'react';
import styles from './App.module.css';
import { CountDownTimer, Header, LeaderBoard, MoleList, Score } from './components';
import { useSelector } from 'react-redux';

function App() {
  const isGameActive = useSelector((state: any) => state.game.gameData.isGameActive);

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.gameActive}>
        <CountDownTimer />
        <Score />
      </div>
      {isGameActive ? (<MoleList />) : (<LeaderBoard />)}
    </div>
  );
}

export default App;
