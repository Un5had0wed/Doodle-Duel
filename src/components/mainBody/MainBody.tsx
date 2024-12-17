import type { FC, PropsWithChildren } from "preact/compat";
import styles from "./MainBody.module.css";

interface MainBodyProps extends PropsWithChildren {}

export const MainBody: FC<MainBodyProps> = ({ children }) => {
  return <div className={styles.mainBody}>{children}</div>;
};
