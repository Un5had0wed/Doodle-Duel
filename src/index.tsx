import { render } from "preact";
import { App } from "./components/app/App.tsx";
import "./styles/index.css";

render(<App />, document.getElementById("app")!);
