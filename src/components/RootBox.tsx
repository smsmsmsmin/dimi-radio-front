import React from "react";
import Box from "./Box";
import css from "@emotion/css";

const RootBox = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  return (
    <Box
      css={css`
        flex-direction: column;
        margin-bottom: 2em;
      `}
      {...props}
    />
  );
};

export default RootBox;
