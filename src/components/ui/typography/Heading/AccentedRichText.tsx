import React from "react";
import { PrismicRichText } from "@prismicio/react";
import linkResolver from "@utils/linkResolver";
import AccentedHeadingText from "./AccentedHeadingText";

type Props = {
  field: any;
};

export default function AccentedRichText({ field }: Props) {
  return (
    <PrismicRichText
      field={field}
      linkResolver={linkResolver}
      components={{
        paragraph: ({ children }: any) => children,
        em: ({ children }: any) => (
          <AccentedHeadingText>{children}</AccentedHeadingText>
        ),
      }}
    />
  );
}
