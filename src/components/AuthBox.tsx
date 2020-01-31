import React from "react";
import css from "@emotion/css";
import Box from "./Box";

const AuthBox = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => (
  <Box
    css={css`
      width: 960px;
      z-index: 200;
      margin: auto;
      @media all and (max-width: 768px) {
        flex-direction: column;
        margin: auto 1em;
      }
    `}
    {...props}
  />
);

export default AuthBox;
