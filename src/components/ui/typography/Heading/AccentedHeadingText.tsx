import React from "react";

interface Props {
  children: string;
}

export default function AccentedHeadingText({ children }: Props) {
  return <span className="heading__accented">{children}</span>;
}
