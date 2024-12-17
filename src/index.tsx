import { render } from "preact";
import type { FC } from "preact/compat";
import { GameBody } from "./components/gameBody/GameBody";
import { Layout } from "./components/layout/Layout";
import "./styles/main.css";

export const App: FC = () => {
  return (
    <GameBody>
      <Layout />
    </GameBody>
  );
};

render(<App />, document.getElementById("app")!);
