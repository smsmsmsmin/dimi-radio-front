import React from "react";
import css from "@emotion/css";

const RegisterAgreeButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => (
  <button
    css={css`
      width: 100%;
      font-size: 1.3em;
      font-weight: 700;
      border: 0;
      color: white;
      margin: 0;
      outline: none;
      padding: 0.5em 1em;
      border-radius: 25px;
      & :first-of-type {
        margin-right: 1em;
      }
    `}
    {...props}
  />
);

export default RegisterAgreeButton;
