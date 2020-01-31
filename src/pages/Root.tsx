import React from "react";
import AuthContainer from "../components/AuthContainer";
import css from "@emotion/css";
import RegisterButton from "../components/RegisterButton";
// import { Link } from "react-router-dom";
import RootBox from "../components/RootBox";

const Root: React.FC = () => {
  return (
    <AuthContainer>
      <div css={styles.container}>
        <div css={styles.top}>
          <span css={styles.logo}>디미라디오</span>
        </div>
        <RootBox>
          <p css={styles.des}>
            진지하게 털어놓지 못한 속마음, 익명이 보장되는 디미라디오에서 함께
            나눠보아요.
          </p>
        </RootBox>
        <RootBox>
          <span css={styles.boxTitle}>사연 작성하기</span>
          <textarea
            css={styles.textArea}
            placeholder="여기에 사연을 입력해주세요."
          />
          <RegisterButton
            css={css`
              font-size: 1em;
              margin-top: 1.5em;
              width: 100%;
            `}
          >
            등록하기
          </RegisterButton>
          {/*<span*/}
          {/*  css={css`*/}
          {/*    font-family: "Iropke Batang";*/}
          {/*  `}*/}
          {/*>*/}
          {/*  사연을 작성하려면 로그인이 필요합니다.*/}
          {/*</span>*/}
          {/*<RegisterButton*/}
          {/*  css={css`*/}
          {/*    font-size: 1em;*/}
          {/*    margin-top: 1.5em;*/}
          {/*    width: 100%;*/}
          {/*  `}*/}
          {/*>*/}
          {/*  로그인*/}
          {/*</RegisterButton>*/}
        </RootBox>
        <RootBox>
          <span css={styles.boxTitle}>1번째 사연</span>
          <span css={styles.content}>
            테스트사연내용테스트사연내용테스트사연내용테스트사연내용테스트사연내용테스트사연내용테스트사연내용테스트사연내용테스트사연내용
          </span>
          <span css={styles.timestamp}>1월 1일 오후 10시 30분 등록</span>
        </RootBox>
      </div>
    </AuthContainer>
  );
};

const styles = {
  container: css`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 1em;
  `,
  top: css`
    display: flex;
    width: 100%;
    height: fit-content;
    padding: 2em 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  logo: css`
    font-size: 3em;
    font-family: "GmarketSansBold";
  `,
  des: css`
    font-size: 1.5em;
    font-family: "Cafe24Oneprettynight";
    line-height: 1.5em;
    margin: auto;
  `,
  button: css`
    font-size: 1.5em;
    padding: 0.5em 1em;
    border: 0;
  `,
  boxTitle: css`
    font-family: "NanumSquareRound", sans-serif;
    font-weight: 800;
    font-size: 1.8em;
    margin-bottom: 1em;
  `,
  textArea: css`
    font-size: 1em;
    background-color: #f3f3f5;
    border-radius: 15px;
    border: 0;
    resize: none;
    outline: 0;
    min-height: 100px;
    padding: 1em;
    font-family: "Iropke Batang";
  `,
  content: css`
    font-size: 1em;
    font-family: "Iropke Batang";
    margin-bottom: 2em;
    line-height: 1.5em;
  `,
  timestamp: css`
    font-family: "NanumSquareRound", sans-serif;
    color: #424242;
  `
};

export default Root;
