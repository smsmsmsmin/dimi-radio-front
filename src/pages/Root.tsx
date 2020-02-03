import React, { useEffect } from "react";
import AuthContainer from "../components/AuthContainer";
import css from "@emotion/css";
// import { Link } from "react-router-dom";
import RootBox from "../components/RootBox";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import StoryBox from "../components/StoryBox";
import RootWrite from "../components/RootWrite";

const LOAD_STORYS = gql`
  query {
    StoryView{
      _id
      number
      contents
      createAt
    }
  }
`;

const Root: React.FC = () => {
  const { data, refetch } = useQuery(LOAD_STORYS);

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
        <RootWrite refetch={refetch}/>
        {data?.StoryView.map((story: any) => (
          <StoryBox
            key={story._id}
            index={story.number}
            contents={story.contents}
            createAt={story.createAt}
          />
        ))}
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
    font-size: 1.3em;
    font-family: "Cafe24Oneprettynight";
    line-height: 1.5em;
    margin: auto;
  `,
  button: css`
    font-size: 1.5em;
    padding: 0.5em 1em;
    border: 0;
  `
};

export default Root;
