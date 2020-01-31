import React from "react";
import RegisterAgreeButton from "./RegisterAgreeButton";
import css from "@emotion/css";

interface IProps {
  type: string;
  value: boolean;
  setValue: (e: React.MouseEvent<HTMLButtonElement>, value: boolean) => void;
}

const RegisterAgree = (props: IProps) => {
  return (
    <div css={styles.buttonWrap}>
      <RegisterAgreeButton
        name={props.type}
        css={styles.agreeButton(props.value)}
        onClick={e => props.setValue(e, true)}
      >
        동의
      </RegisterAgreeButton>
      <RegisterAgreeButton
        name={props.type}
        css={styles.deniedButton(props.value)}
        onClick={e => props.setValue(e, false)}
      >
        거부
      </RegisterAgreeButton>
    </div>
  );
};

const styles = {
  legal: css`
    width: 100%;
    font-size: 1em;
    border: 1px solid #f0f0f0;
    resize: none;
    outline: 0;
    min-height: 300px;
    padding: 0.5em;
    margin-bottom: 3em;
  `,
  buttonWrap: css`
    display: flex;
    width: 100%;
  `,
  agreeButton: (status: boolean) => css`
    background-color: ${status ? "#4caf50" : "#757575"};
  `,
  deniedButton: (status: boolean) => css`
    background-color: ${!status ? "#d32f2f" : "#757575"};
  `
};

export default RegisterAgree;
