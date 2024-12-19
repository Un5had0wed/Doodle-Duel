import type { FC } from "preact/compat";
import { createContext, useContext, useReducer } from "preact/compat";
import type { UserActionType, UserContextType, UserState } from "./types";

const initialState: UserState = {};

const UserContext = createContext<UserContextType | null>(null);

const userReducer = (state: UserState, action: UserActionType): UserState => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useUserContext = (): UserContextType | null => {
  const context = useContext(UserContext);
  return context;
};

export const UserContextProvider: FC = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};
