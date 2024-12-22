import type { FC } from "preact/compat";
import { DrawingCanva } from "../drawingCanva/DrawingCanva";
import { ToolBar } from "../toolBar/ToolBar";
import { WordHint } from "../wordHint/WordHint";
import styles from "./PlayingArea.module.css";

export const PlayingArea: FC = () => {
  return (
    <div className={styles.playingArea}>
      <WordHint />
      <DrawingCanva />
      <ToolBar />
    </div>
  );
};
