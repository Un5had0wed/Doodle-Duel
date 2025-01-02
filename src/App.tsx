import type { FC } from "preact/compat";
import { GameRoot } from "./components/gameRoot/GameRoot";
import { HomePage } from "./components/homePage/HomePage";
import { useGameContext } from "./contexts/game/GameContext";

export const App: FC = () => {
  const { gameState } = useGameContext()!;

  return <>{gameState.isGameActive ? <GameRoot /> : <HomePage />}</>;
};
