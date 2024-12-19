export interface GameState {
  isGameActive: boolean;
}

export interface GameContextType {
  gameState: GameState;
  gameDispatch: React.Dispatch<any>;
}

export type GameActionType = {
  type: GameAction;
  payload: any;
};

export enum GameAction {
  SET_GAME_ACTIVE,
}
