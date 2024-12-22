import type { FC } from "preact/compat";
import styles from "./Header.module.css";

export const Header: FC = ({ children }) => {
  return <header className={styles.gameHeader}>{children}</header>;
};
