import React, { Dispatch, SetStateAction, useState } from "react";
import { IInfo } from "../pages/auth/Register";
import AuthInput from "./AuthInput";
import { phone } from "../utils";
import css from "@emotion/css";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import SweetAlert from "../utils/swal";

const AUTH_PHONE = gql`
  mutation($phone: String!) {
    AuthPhone(phone: $phone) {
      phone
    }
  }
`;

const AUTH_VERIFY = gql`
  mutation($phone: String!, $randomCode: String!) {
    AuthVerify(phone: $phone, randomCode: $randomCode) {
      phone
    }
  }
`;

interface IProps {
  info: IInfo;
  setInfo: Dispatch<SetStateAction<IInfo>>;
}

const PhoneVerify = (props: IProps) => {
  const { info, setInfo } = props;
  const [verifyNumber, setVerifyNumber] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(false);
  const [request, setRequest] = useState<boolean>(false);
  const [requestAuth] = useMutation(AUTH_PHONE, {
    variables: {
      phone: info.phone
    },
    onCompleted: () => {
      SweetAlert.success("휴대폰으로 전송된 인증번호를 확인해주세요.");
      setRequest(true);
    },
    onError: error => {
      setDisable(false);
      SweetAlert.error(error.message);
    }
  });
  const [verifyAuth] = useMutation(AUTH_VERIFY, {
    variables: {
      phone: info.phone,
      randomCode: verifyNumber
    },
    onCompleted: data => {
      setInfo(prevState => ({
        ...prevState,
        phoneToken: data.AuthVerify.phone
      }));
      SweetAlert.success("인증번호 확인에 성공했습니다.");
    },
    onError: error => {
      SweetAlert.error(error.message);
    }
  });

  const handleChange = (e: any) => {
    e.persist();
    setInfo(prevState => ({
      ...prevState,
      [e.target.name]: phone(e.target.value)
    }));
  };

  const handleClick = () => {
    if (!disable) {
      setDisable(true);
      requestAuth();
    }
  };

  const handleVerify = () => {
    verifyAuth();
  };

  return (
    <div>
      <div css={styles.inputWithButtonWrap}>
        <AuthInput
          name="phone"
          placeholder="전화번호"
          type="text"
          value={info.phone}
          onChange={handleChange}
          maxLength={13}
          disabled={disable}
        />
        {request || (
          <button css={styles.button} onClick={handleClick}>
            인증하기
          </button>
        )}
      </div>
      {!request || (
        <div css={styles.inputWithButtonWrap}>
          <AuthInput
            name="verifyNumber"
            placeholder="인증번호"
            type="number"
            value={verifyNumber}
            onChange={e => setVerifyNumber(e.target.value)}
            maxLength={6}
            disabled={!!info.phoneToken}
          />
          {info.phoneToken ? null : (
            <button css={styles.button} onClick={handleVerify}>
              확인
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  inputWithButtonWrap: css`
    display: flex;
  `,
  button: css`
    border: 0;
    padding: 0.5em 1em;
    font-size: 1.3em;
    // border: 1px solid #adadad;
    color: #adadad;
    min-width: fit-content;
    background-color: #0091ea;
    margin-bottom: 0.5em;
    outline: 0;
    color: white;
    font-weight: 700;
    margin-left: 0.5em;
    border-radius: 25px;
  `
};

export default PhoneVerify;
