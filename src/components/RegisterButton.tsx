import React from "react";
import css from "@emotion/css";

const RegisterButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => (
  <button
    css={css`
      font-size: 1.3em;
      font-weight: 700;
      border: 0;
      background-color: #4caf50;
      border-radius: 25px;
      color: white;
      margin: 0;
      outline: none;
      padding: 0.5em 1em;
      margin-left: auto;
    `}
    {...props}
  />
);

export default RegisterButton;
