import { FC } from "preact/compat";
import styles from "./ColorPanel.module.css";

interface ColorPanelProps {
  onSelectColor?: (color: string) => void;
}

const COLOR_CODES = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  yellow: "#ffff00",
  black: "#000000",
  white: "#ffffff",
};

export const ColorPanel: FC<ColorPanelProps> = ({ onSelectColor }) => {
  const handleColorChange = (e: Event) => {
    const color = (e.target as HTMLInputElement).value;
    onSelectColor?.(color);
  };

  return (
    <div className={styles.colorPanel}>
      {Object.values(COLOR_CODES).map((color) => (
        <div
          key={color}
          className={styles.colorPanel__color}
          style={{ backgroundColor: color }}
          onClick={() => onSelectColor?.(color)}
        />
      ))}
      <input
        type="color"
        onInput={handleColorChange}
        className={styles.colorPanel__colorInput}
      />
    </div>
  );
};
