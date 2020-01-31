import React from "react";
import css from "@emotion/css";

const LoginButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => (
  <button
    css={css`
      width: 100%;
      background: linear-gradient(to left, #7c4dff, #2196f3);
      font-size: 1em;
      height: 50px;
      border-radius: 25px;
      font-weight: 700;
      color: white;
      border: 0;
      outline: none;
    `}
    {...props}
  />
);

export default LoginButton;
