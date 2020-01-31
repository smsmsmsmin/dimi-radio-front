import Lottie from "react-lottie";
import React from "react";
import animationData from "../assets/wave.json";

const LoginLeftImg = () => {
  const lottieOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      className: "animation",
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Lottie
      options={lottieOptions}
      isStopped={false}
      isPaused={false}
      isClickToPauseDisabled={true}
    />
  );
};

export default LoginLeftImg;
