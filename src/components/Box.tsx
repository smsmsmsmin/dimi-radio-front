import React from "react";
import css from "@emotion/css";

const Box = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => (
  <div
    css={css`
      display: flex;
      padding: 1.5em;
      border-radius: 15px;
      background-color: white;
      box-shadow: 15px 19px 32px -18px rgba(21, 19, 19, 0.07);
    `}
    {...props}
  />
);

export default Box;
