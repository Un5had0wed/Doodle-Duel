import type { FC } from "preact/compat";
import { useGameContext } from "../../contexts/game/GameContext";
import { GameRoot } from "../gameRoot/GameRoot";
import { HomePage } from "../homePage/HomePage";

export const App: FC = () => {
  const { gameState } = useGameContext()!;

  return <>{gameState.isGameActive ? <GameRoot /> : <HomePage />}</>;
};
