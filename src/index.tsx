import { render } from "preact";
import { App } from "./App.tsx";
import { GameContextProvider } from "./contexts/game/GameContext.tsx";
import { UserContextProvider } from "./contexts/user/UserContext.tsx";
import "./styles/index.css";

render(
  <UserContextProvider>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </UserContextProvider>,
  document.getElementById("app")!,
);
