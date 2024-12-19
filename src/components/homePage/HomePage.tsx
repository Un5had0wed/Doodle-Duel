import type { FC } from "preact/compat";
import styles from "./HomePage.module.css";

export const HomePage: FC = () => {
  return (
    <div className={styles.homePage}>
      <h1>Home Page</h1>
    </div>
  );
};
