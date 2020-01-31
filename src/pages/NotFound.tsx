import React from "react";
import logo from "../assets/errorlogo.svg";
import css from "@emotion/css";

const NotFound: React.FC = () => {
  return (
    <div css={styles.container}>
      <div css={styles.contents}>
        <div css={styles.codeWrap}>
          <p css={[styles.code, styles.gradient]}>404</p>
          <p css={[styles.type, styles.gradient]}>/</p>
        </div>
        <p css={[styles.label, styles.gradient]}>NOT FOUND</p>
        <p css={[styles.description, styles.gradient]}>
          페이지를 찾을 수 없습니다.
        </p>
      </div>
      <img src={logo} css={styles.logo} alt="logo"/>
    </div>
  );
};

const styles = {
  container: css`
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
  `,
  contents: css`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 1;
    padding: 20px 20px;
    @media all and (min-width: 768px) {
      padding: 3em;
    }
  `,
  codeWrap: css`
    display: flex;
    align-items: flex-end;
    margin-bottom: 7px;
    @media all and (min-width: 768px) {
      margin-bottom: 20px;
    }
  `,
  code: css`
    font-family: "Axis";
    font-size: 60px;
    margin-bottom: -13px;
    @media all and (min-width: 768px) {
      font-size: 140px;
      margin-bottom: -40px;
    }
  `,
  type: css`
    font-family: "Spoqa Han Sans";
    font-weight: 700;
    margin-left: 10px;
    font-size: 23px;
    @media all and (min-width: 768px) {
      font-size: 40px;
    }
  `,
  label: css`
    font-family: "Axis";
    font-size: 33px;
    @media all and (min-width: 768px) {
      font-size: 80px;
    }
  `,
  gradient: css`
    width: fit-content;
    background: linear-gradient(to right, #2196f3, #7c4dff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
  background: css`
    position: absolute;
    width: 100%;
    height: 100vh;
  `,
  logo: css`
    position: absolute;
    top: -30px;
    right: -60px;
    width: 70%;
    z-index: -999999;
    @media all and (min-width: 768px) {
      top: -450px;
      right: -200px;
    }
  `,
  description: css`
    font-weight: 700;
    font-size: 22px;
    @media all and (min-width: 768px) {
      font-size: 35px;
      padding-left: 10px;
    }
  `
};

export default NotFound;
