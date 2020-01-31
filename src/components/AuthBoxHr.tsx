import React from "react";
import css from "@emotion/css";

const AuthBoxHr = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>) => (
  <hr
    css={css`
      border: 0;
      border-left: 2px solid #f0f0f0;
      @media all and (max-width: 768px) {
        display: none;
      }
    `}
    {...props}
  />
);

export default AuthBoxHr;
