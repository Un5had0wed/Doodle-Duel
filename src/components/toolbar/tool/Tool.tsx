import { FC } from "preact/compat";
import styles from "./Tool.module.css";

interface ToolProps {
  isSelected?: boolean;
  icon: string;
  onClick?: () => void;
}

export const Tool: FC<ToolProps> = ({ icon, onClick, isSelected }) => {
  return (
    <div
      className={`${styles.tool} ${isSelected ? styles.tool_selected : ""}`}
      onClick={onClick}
    >
      <img className={styles.tool__icon} src={icon} alt="icon" />
    </div>
  );
};
