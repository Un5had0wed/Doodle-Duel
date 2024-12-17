import type { FC, PropsWithChildren } from "preact/compat";
import styles from "./GameBody.module.css";

interface GameBodyProps extends PropsWithChildren {
  className?: string;
}

export const GameBody: FC<GameBodyProps> = ({ children, className }) => {
  const combinedClass = `${styles.gameWindow} ${className ? className : ""}`;
  return <div className={combinedClass}>{children}</div>;
};
