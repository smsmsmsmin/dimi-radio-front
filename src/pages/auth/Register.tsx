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
import { phone } from "../../utils";
import RegisterButton from "../../components/RegisterButton";
import Swal from "sweetalert2";

const Register = () => {
  const [info, setInfo] = useState({
    name: "",
    id: "",
    password: "",
    "re-password": "",
    contact: ""
  });
  const [agree, setAgree] = useState({ legal: false, privacy: false });
  const [agreeValidation, setAgreeValidation] = useState(false);
  // const [validation, setValidation] = useState(false);

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
      [e.target.name]:
        e.target.name === "contact" ? phone(e.target.value) : e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    Swal.fire({
      title: "등록 완료",
      text: "성공적으로 등록이 완료되었습니다.",
      icon: "success",
      confirmButtonText: "확인",
      heightAuto: false
    });
  };

  useEffect(() => {
    setAgreeValidation(agree.legal && agree.privacy);
  }, [agree]);

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
                  <AuthInput name="name" placeholder="이름" type="text" />
                  <AuthInput name="id" placeholder="아이디" type="text" />
                  <AuthInput
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                  />
                  <AuthInput
                    name="re-password"
                    placeholder="비밀번호 재입력"
                    type="password"
                  />
                  <AuthInput
                    name="contact"
                    placeholder="전화번호"
                    type="text"
                    value={info.contact}
                    onChange={handleChange}
                    maxLength={13}
                  />
                </div>
                <RegisterButton type="submit">가입하기</RegisterButton>
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
