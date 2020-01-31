import React from "react";
import RootBox from "./RootBox";
import RootBoxTitle from "./RootBoxTitle";
import css from "@emotion/css";

interface IProps {
  index: number | string;
  contents: string;
  createAt: string;
}

const StoryBox = (props: IProps) => {
  return (
    <RootBox>
      <RootBoxTitle>{props.index}번째 사연</RootBoxTitle>
      <span css={styles.content}>{props.contents} </span>
      <span css={styles.timestamp}>{props.createAt}</span>
    </RootBox>
  );
};

const styles = {
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

export default StoryBox;
