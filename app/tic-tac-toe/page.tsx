import Game from "@/lib/tic-tac-toe/Game";
import styles from "./page.module.css";

const TicTacToePage = () => {
  return (
    <div className={styles["ttt-game"]}>
      <Game />
    </div>
  );
};

export default TicTacToePage;