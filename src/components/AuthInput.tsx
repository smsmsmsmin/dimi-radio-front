import React from "react";
import css from "@emotion/css";
import Input from "./Input";

const AuthInput = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => (
  <Input
    css={css`
      font-size: 1.3em;
      margin-bottom: 0.5em;
      // &: last-child {
      //   margin-bottom: 0;
      // }
    `}
    {...props}
  />
);

export default AuthInput;
