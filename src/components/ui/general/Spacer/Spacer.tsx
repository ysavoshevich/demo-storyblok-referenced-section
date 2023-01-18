import React from "react";
import cx from "classnames";
import "./index.scss";

interface Props {
  type: string;
}

export default function Spacer({ type }: Props) {
  return (
    <div
      className={cx("spacer", {
        [`spacer_sm`]: type === "sm",
        [`spacer_md`]: type === "md",
        [`spacer_lg`]: type === "lg",
        [`spacer_xl`]: type === "xl",
      })}
      role="separator"
    />
  );
}
