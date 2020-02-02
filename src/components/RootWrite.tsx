import React, { useState } from "react";
import RootBox from "./RootBox";
import RootBoxTitle from "./RootBoxTitle";
import RegisterButton from "./RegisterButton";
import css from "@emotion/css";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import auth from "../utils/auth";
import { Link, useHistory } from "react-router-dom";
import SweetAlert from "../utils/swal";

const NEW_STORY = gql`
  mutation($contents: String!) {
    StoryWrite(contents: $contents) {
      _id
      contents
      createAt
    }
  }
`;

const RootWrite = ({ refetch }: any) => {
  const history = useHistory();
  const [contents, setContents] = useState("");
  const [StoryWrite] = useMutation(NEW_STORY, {
    variables: {
      contents
    },
    onCompleted: () => {
      setContents("");
      refetch();
      SweetAlert.success("성공적으로 등록이 완료되었습니다.");
    },
    onError: error => {
      SweetAlert.error(error.message);
      if (
        error.message ===
        "GraphQL error: 로그아웃되었어요. 다시 로그인해주세요."
      ) {
        history.push("/auth/login");
      }
    }
  });

  return (
    <RootBox>
      {auth.getToken() !== null ? (
        <>
          <RootBoxTitle>사연 작성하기</RootBoxTitle>
          <textarea
            css={styles.textArea}
            placeholder="여기에 사연을 입력해주세요."
            value={contents}
            onChange={e => setContents(e.target.value)}
          />
          <RegisterButton css={styles.button} onClick={() => StoryWrite()}>
            등록하기
          </RegisterButton>
        </>
      ) : (
        <>
          <span css={styles.loginDes}>
            사연을 작성하려면 로그인이 필요합니다.
          </span>
          <Link to="/auth/login">
            <RegisterButton css={styles.button}>로그인</RegisterButton>
          </Link>
        </>
      )}
    </RootBox>
  );
};

const styles = {
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
  loginDes: css`
    font-family: "Iropke Batang";
  `,
  button: css`
    font-size: 1em;
    margin-top: 1.5em;
    width: 100%;
  `
};

export default RootWrite;
