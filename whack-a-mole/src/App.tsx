import React from 'react';
import styles from './App.module.css';
import { CountDownTimer, Header, MoleList, Score } from './components';
import { useSelector } from 'react-redux';

function App() {
  const isGameActive = useSelector((state: any) => state.game.isGameActive);

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.gameActive}>
        <CountDownTimer />
        <Score />
      </div>
      {isGameActive && (<MoleList />)}
    </div>
  );
}

export default App;
