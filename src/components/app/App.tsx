import type { FC } from "preact/compat";
import { Chat } from "../chat/Chat";
import { GameRoot } from "../gameRoot/GameRoot";
import { Header } from "../header/Header";
import { Layout } from "../layout/Layout";
import { Main } from "../main/Main";
import { PlayingArea } from "../playinArea/PlayingArea";
import { ScoreBoard } from "../scoreBoard/ScoreBoard";

export const App: FC = () => {
  return (
    <GameRoot>
      <Layout>
        <Header>Doodle Duel</Header>
        <Main>
          <ScoreBoard />
          <PlayingArea />
          <Chat />
        </Main>
      </Layout>
    </GameRoot>
  );
};
