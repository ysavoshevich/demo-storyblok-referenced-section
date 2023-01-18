import React from "react";
import Spacer from "./Spacer";

interface Props {
  slice: {
    primary: {
      spacer_type: string;
    };
  };
}

export default function PrismicSpacer({
  slice: {
    primary: { spacer_type },
  },
}: Props) {
  return <Spacer type={spacer_type} />;
}
