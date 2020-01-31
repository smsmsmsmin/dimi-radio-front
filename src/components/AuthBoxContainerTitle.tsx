import React from "react";
import css from "@emotion/css";

const AuthBoxContainerTitle = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
) => (
  <span
    css={css`
      font-size: 1.8em;
      font-weight: 700;
      margin-right: auto;
      margin-bottom: 1.5em;
    `}
    {...props}
  />
);

export default AuthBoxContainerTitle;
