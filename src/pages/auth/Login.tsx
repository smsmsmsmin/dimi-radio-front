import React, { useState } from "react";
import css from "@emotion/css";
import { Link } from "react-router-dom";
import AuthContainer from "../../components/AuthContainer";
import LoginLeftImg from "../../components/LoginLeftImg";
import LoginButton from "../../components/LoginButton";
import AuthBox from "../../components/AuthBox";
import AuthBoxContainer from "../../components/AuthBoxContainer";
import AuthBoxHr from "../../components/AuthBoxHr";
import AuthInput from "../../components/AuthInput";
import AuthBoxContainerTitle from "../../components/AuthBoxContainerTitle";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import SweetAlert from "../../utils/swal";
import auth from "../../utils/auth";

const AUTH_LOGIN = gql`
  mutation($idx: String!, $password: String!) {
    AuthLogin(idx: $idx, password: $password) {
      accessToken
    }
  }
`;

const Login = () => {
  const history = useHistory();

  const [info, setInfo] = useState({ idx: "", password: "" });
  const [AuthLogin] = useMutation(AUTH_LOGIN, {
    variables: { ...info },
    onCompleted: data => {
      auth.setToken(data.AuthLogin.accessToken);
      history.push('/');
    },
    onError: error => SweetAlert.error(error.message)
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    AuthLogin();
  };

  const handleChange = (e: any) => {
    e.persist();
    setInfo(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <AuthContainer>
      <AuthBox>
        <AuthBoxContainer css={styles.leftContainer}>
          <LoginLeftImg />
        </AuthBoxContainer>
        <AuthBoxHr />
        <AuthBoxContainer>
          <AuthBoxContainerTitle>로그인</AuthBoxContainerTitle>
          <form onSubmit={handleSubmit}>
            <div css={styles.middleWrap}>
              <AuthInput
                name="idx"
                placeholder="아이디"
                autoComplete="off"
                value={info.idx}
                onChange={handleChange}
              />
              <AuthInput
                name="password"
                placeholder="비밀번호"
                type="password"
                autoComplete="off"
                value={info.password}
                onChange={handleChange}
              />
            </div>
            <div css={styles.bottomWrap}>
              <LoginButton>로그인</LoginButton>
              <div css={styles.linkWrap}>
                <Link to="/auth/register" css={styles.link}>
                  회원가입
                </Link>
                <Link to="/auth/find" css={styles.link}>
                  비밀번호 찾기
                </Link>
              </div>
            </div>
          </form>
        </AuthBoxContainer>
      </AuthBox>
    </AuthContainer>
  );
};

const styles = {
  container: css`
    display: flex;
    width: 100%;
    height: 100%;
  `,
  leftContainer: css`
    @media all and (max-width: 768px) {
      display: none;
    }
  `,
  logo: css`
    width: 70%;
    margin-bottom: 4em;
  `,
  middleWrap: css`
    margin-bottom: 4em;
    width: 100%;
    overflow: hidden;
  `,
  bottomWrap: css`
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
  `,
  link: css`
    text-decoration: none;
    color: #333333;
    & :first-of-type {
      margin-right: 1em;
    }
  `,
  linkWrap: css`
    margin-top: 2em;
  `
};

export default Login;
