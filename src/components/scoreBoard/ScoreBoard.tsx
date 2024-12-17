import type { FC } from "preact/compat";
import styles from "./ScoreBoard.module.css";

interface ScoreBoardProps {}

export const ScoreBoard: FC<ScoreBoardProps> = () => {
  return <div className={styles.scoreBoard}></div>;
};
