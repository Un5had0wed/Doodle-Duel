import type { FC } from "preact/compat";
import styles from "./ChatWindow.module.css";

interface ChatWindowProps {}

export const ChatWindow: FC<ChatWindowProps> = () => {
  return <div className={styles.chatWindow}></div>;
};
