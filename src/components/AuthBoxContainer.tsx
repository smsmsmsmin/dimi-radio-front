import React from "react";
import css from "@emotion/css";

const AuthBoxContainer = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => (
  <div
    css={css`
      display: flex;
      flex: 1;
      padding: 2em;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @media all and (max-width: 768px) {
        padding: 1em;
        margin-bottom: 1em;
      }
    `}
    {...props}
  />
);

export default AuthBoxContainer;
