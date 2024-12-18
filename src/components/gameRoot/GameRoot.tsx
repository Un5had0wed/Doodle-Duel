import type { FC } from "preact/compat";
import styles from "./GameRoot.module.css";

export const GameRoot: FC = ({ children }) => {
  return <div className={styles.gameRoot}>{children}</div>;
};
