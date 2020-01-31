import Lottie from "react-lottie";
import React from "react";
import animationData from "../assets/register.json";
import css from "@emotion/css";

const RegisterLottie = () => {
  const lottieOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      className: "register-animation",
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div
      css={css`
        @media all and (max-width: 768px) {
          display: none;
        }
      `}
    >
      <Lottie
        options={lottieOptions}
        isStopped={false}
        isPaused={false}
        isClickToPauseDisabled={true}
      />
    </div>
  );
};

export default RegisterLottie;
