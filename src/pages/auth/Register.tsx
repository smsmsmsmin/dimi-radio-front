import React, { useEffect, useState } from "react";
import AuthContainer from "../../components/AuthContainer";
import AuthBox from "../../components/AuthBox";
import AuthBoxHr from "../../components/AuthBoxHr";
import AuthBoxContainer from "../../components/AuthBoxContainer";
import css from "@emotion/css";
import { legal, privacy } from "../../utils/legal";
import AuthBoxContainerTitle from "../../components/AuthBoxContainerTitle";
import RegisterAgree from "../../components/RegisterAgree";
import RegisterLottie from "../../components/RegisterLottie";
import AuthInput from "../../components/AuthInput";
import RegisterButton from "../../components/RegisterButton";
import PhoneVerify from "../../components/PhoneVerify";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import SweetAlert from "../../utils/swal";
import { useHistory } from "react-router";

const REGISTER_AUTH = gql`
  mutation(
    $identity: String!
    $username: String!
    $studentId: String!
    $phone: String!
    $password: String!
    $passwordConfirm: String!
  ) {
    AuthSignup(
      identity: $identity
      username: $username
      studentId: $studentId
      phone: $phone
      password: $password
      passwordConfirm: $passwordConfirm
    ) {
      _id
    }
  }
`;

export interface IInfo {
  name: string;
  studentId: string;
  id: string;
  password: string;
  "re-password": string;
  phone: string;
  phoneToken: string;
}

const Register = () => {
  const history = useHistory();
  const [info, setInfo] = useState<IInfo>({
    name: "",
    studentId: "",
    id: "",
    password: "",
    "re-password": "",
    phone: "",
    phoneToken: ""
  });
  const [agree, setAgree] = useState({ legal: false, privacy: false });
  const [agreeValidation, setAgreeValidation] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);
  const [registerAuth] = useMutation(REGISTER_AUTH, {
    variables: {
      identity: info.id,
      username: info.name,
      studentId: info.studentId,
      phone: info.phoneToken,
      password: info.password,
      passwordConfirm: info["re-password"]
    },
    onCompleted: () => {
      SweetAlert.success("성공적으로 회원가입이 완료되었습니다.");
      history.push("/");
    },
    onError: error => {
      setDisable(false);
      SweetAlert.error(error.message);
    }
  });

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: boolean
  ) => {
    e.persist();
    setAgree(prevState => ({ ...prevState, [(e.target as any).name]: value }));
  };

  const handleChange = (e: any) => {
    e.persist();
    setInfo(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Swal.fire({
    //   title: "등록 완료",
    //   text: "성공적으로 등록이 완료되었습니다.",
    //   icon: "success",
    //   confirmButtonText: "확인",
    //   heightAuto: false
    // });
  };

  const handleRegister = () => {
    if (!disable) {
      registerAuth();
      setDisable(true);
    }
  };

  useEffect(() => {
    setAgreeValidation(agree.legal && agree.privacy);
  }, [agree]);

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <AuthContainer>
      <AuthBox>
        <AuthBoxContainer>
          {agreeValidation ? (
            <RegisterLottie />
          ) : (
            <>
              <AuthBoxContainerTitle>이용약관</AuthBoxContainerTitle>
              <textarea
                css={styles.legal}
                readOnly={true}
                defaultValue={legal}
              />
              <RegisterAgree
                type="legal"
                value={agree.legal}
                setValue={handleClick}
              />
            </>
          )}
        </AuthBoxContainer>
        <AuthBoxHr />
        <AuthBoxContainer>
          {agreeValidation ? (
            <>
              <AuthBoxContainerTitle>환영합니다!</AuthBoxContainerTitle>
              <form css={styles.form} onSubmit={handleSubmit}>
                <div css={styles.inputWrap}>
                  <AuthInput
                    name="name"
                    placeholder="이름"
                    type="text"
                    value={info.name}
                    onChange={handleChange}
                  />
                  <AuthInput
                    name="studentId"
                    placeholder="학번"
                    type="text"
                    value={info.studentId}
                    onChange={handleChange}
                  />
                  <AuthInput
                    name="id"
                    placeholder="아이디"
                    type="text"
                    value={info.id}
                    onChange={handleChange}
                  />
                  <AuthInput
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                    value={info.password}
                    onChange={handleChange}
                  />
                  <AuthInput
                    name="re-password"
                    placeholder="비밀번호 재입력"
                    type="password"
                    value={info["re-password"]}
                    onChange={handleChange}
                  />
                  <PhoneVerify info={info} setInfo={setInfo} />
                </div>
                <RegisterButton
                  type="submit"
                  onClick={handleRegister}
                  disabled={disable}
                >
                  가입하기
                </RegisterButton>
              </form>
            </>
          ) : (
            <>
              <AuthBoxContainerTitle>개인정보처리방침</AuthBoxContainerTitle>
              <textarea
                css={styles.legal}
                readOnly={true}
                defaultValue={privacy}
              />
              <RegisterAgree
                type="privacy"
                value={agree.privacy}
                setValue={handleClick}
              />
            </>
          )}
        </AuthBoxContainer>
      </AuthBox>
    </AuthContainer>
  );
};

const styles = {
  form: css`
    display: flex;
    flex-direction: column;
  `,
  inputWrap: css`
    margin-bottom: 3em;
  `,
  legal: css`
    width: 100%;
    font-size: 1em;
    border: 1px solid #f0f0f0;
    resize: none;
    outline: 0;
    min-height: 300px;
    padding: 0.5em;
    margin-bottom: 3em;
    @media all and (max-width: 768px) {
      min-height: 100px;
    }
  `
};

export default Register;
