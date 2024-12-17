import type { FC, PropsWithChildren } from "preact/compat";
import "./Header.css";

interface HeaderProps extends PropsWithChildren {}

export const Header: FC<HeaderProps> = ({ children }) => {
  return <header>{children}</header>;
};
