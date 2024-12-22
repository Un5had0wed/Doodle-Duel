export interface UserState {}

export interface UserContextType {
  userState: UserState;
  userDispatch: React.Dispatch<any>;
}

export type UserActionType = {
  type: UserAction;
  payload: any;
};

export enum UserAction {
  SET_USER_ID,
  SET_USER_NAME,
}
