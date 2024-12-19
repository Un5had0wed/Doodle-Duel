import type { FC } from "preact/compat";
import { Chat } from "../chat/Chat";
import { Header } from "../header/Header";
import { Layout } from "../layout/Layout";
import { Main } from "../main/Main";
import { PlayingArea } from "../playinArea/PlayingArea";
import { ScoreBoard } from "../scoreBoard/ScoreBoard";
import styles from "./GameRoot.module.css";

export const GameRoot: FC = () => {
  return (
    <div className={styles.gameRoot}>
      <Layout>
        <Header>Doodle Duel</Header>
        <Main>
          <ScoreBoard />
          <PlayingArea />
          <Chat />
        </Main>
      </Layout>
    </div>
  );
};
