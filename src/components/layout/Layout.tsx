import type { FC } from "preact/compat";
import styles from "./Layout.module.css";

export const Layout: FC = ({ children }) => {
  return <div className={styles.gameLayout}>{children}</div>;
};
