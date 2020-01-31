import React from "react";
import css from "@emotion/css";

const RootBoxTitle = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
) => (
  <span
    css={css`
      font-family: "NanumSquareRound", sans-serif;
      font-weight: 800;
      font-size: 1.8em;
      margin-bottom: 1em;
    `}
    {...props}
  />
);

export default RootBoxTitle;
