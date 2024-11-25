"use client";

import Board from "./Board";
import styles from "../../app/tic-tac-toe/page.module.css";

const Game = () => {
  return (
    <div className={styles.game}>
      <h1 className={styles.title}>Tic Tac Toe</h1>
      <Board />
    </div>
  );
};

export default Game;
