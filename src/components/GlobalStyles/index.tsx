import React, { ReactNode } from "react";
import "./GlobalStyles.scss";

interface GlobalStylesProps {
  children: ReactNode;
}

function GlobalStyles({ children }: GlobalStylesProps): JSX.Element {
  return <>{children}</>;
}

export default GlobalStyles;
