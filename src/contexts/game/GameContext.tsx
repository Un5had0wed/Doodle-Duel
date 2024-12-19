import type { FC } from "preact/compat";
import { createContext, useContext, useReducer } from "preact/compat";
import type { GameActionType, GameContextType, GameState } from "./types";
import { GameAction } from "./types";

const initialState: GameState = {
  isGameActive: false,
};

const GameContext = createContext<GameContextType | null>(null);

const userReducer = (state: GameState, action: GameActionType): GameState => {
  switch (action.type) {
    case GameAction.SET_GAME_ACTIVE:
      return { ...state, isGameActive: action.payload };
    default:
      return state;
  }
};

export const useGameContext = (): GameContextType | null => {
  const context = useContext(GameContext);
  return context;
};

export const GameContextProvider: FC = ({ children }) => {
  const [gameState, gameDispatch] = useReducer(userReducer, initialState);

  return (
    <GameContext.Provider value={{ gameState, gameDispatch }}>
      {children}
    </GameContext.Provider>
  );
};
