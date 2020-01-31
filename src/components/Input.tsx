import React from "react";
import css from "@emotion/css";

const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => (
  <input
    css={css`
      width: 100%;
      color: #4c4c4c;
      margin: 0;
      padding: 0.5em 0;
      outline: 0;
      border-width: 0 0 2px 0;
      border-color: #f0f0f0;
      transition: border-color 0.2s linear;
      &:: placeholder {
        color: #adadad;
      }
      &: focus {
        border-color: #2196f3;
      }
    `}
    {...props}
  />
);

export default Input;
