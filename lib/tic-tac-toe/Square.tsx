import styles from "./Board.module.css";

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button className={styles["ttt-square"]} onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
