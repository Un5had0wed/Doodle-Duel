import type { FC } from "preact/compat";
import { ChatWindow } from "../chatWindow/ChatWindow";
import { DrawingCanva } from "../drawingCanva/DrawingCanva";
import { Header } from "../header/Header";
import { MainBody } from "../mainBody/MainBody";
import { ScoreBoard } from "../scoreBoard/ScoreBoard";
import { Toolbar } from "../toolbar/Toolbar";
import styles from "./Layout.module.css";

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <div className={styles.gameLayout}>
      <Header>Doodle Duel</Header>
      <MainBody>
        <Toolbar />
        <DrawingCanva />
        <div className={styles.gameLayout__scoreChatPanel}>
          <ScoreBoard />
          <ChatWindow />
        </div>
      </MainBody>
    </div>
  );
};
