import React from "react";
// @ts-ignore
import Snowf from "react-snowf";
import css from "@emotion/css";

const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div css={styles.container}>
      <Snowf
        amount={70}
        size={9}
        speed={2.2}
        opacity={0.7}
        resize={true}
        zIndex={100}
      />
      <div css={styles.children}>{children}</div>
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
    width: 100%;
    height: 100%;
  `,
  children: css`
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 200;
  `
};

export default AuthContainer;
