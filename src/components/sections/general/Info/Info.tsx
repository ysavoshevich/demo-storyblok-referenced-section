import React from "react";
import CustomLink from "@components/ui/general/CustomLink";
import Heading from "@components/ui/typography/Heading";
import PrismicRichTextLink from "@components/ui/general/PrismicRichTextLink";
import { PrismicRichText } from "@prismicio/react";
import linkResolver from "@utils/linkResolver";
import "./index.scss";

interface Props {
  title: string;
  text: any;
  link: string;
}

export default function Info({ title, text, link }: Props) {
  return (
    <div className="info">
      <Heading as="h1" size="m" className="info__title">
        {title}
      </Heading>
      <div className="info__text">
        <PrismicRichText
          field={text}
          linkResolver={linkResolver}
          // @ts-ignore
          internalLinkComponent={PrismicRichTextLink}
          // @ts-ignore
          externalLinkComponent={PrismicRichTextLink}
        />
      </div>
      <CustomLink to={link}>Link</CustomLink>
    </div>
  );
}
