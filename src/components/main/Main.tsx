import type { FC } from "preact/compat";
import styles from "./Main.module.css";

export const Main: FC = ({ children }) => {
  return <main className={styles.gameMain}>{children}</main>;
};
