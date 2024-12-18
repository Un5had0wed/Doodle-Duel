import type { FC } from "preact/compat";
import { GameRoot } from "../gameRoot/GameRoot";
import { Header } from "../header/Header";
import { Layout } from "../layout/Layout";
import { Main } from "../main/Main";

export const App: FC = () => {
  return (
    <GameRoot>
      <Layout>
        <Header></Header>
        <Main></Main>
      </Layout>
    </GameRoot>
  );
};
