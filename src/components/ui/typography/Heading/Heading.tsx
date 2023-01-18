import React from "react";
import classNames from "classnames";
import { BaseProps, DynamicElementProps, TypographyProps } from "@types";
import "./index.scss";

type HeadingSize = "xs" | "s" | "l" | "xl" | "xxl" | "m";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

type HeadingProps = DynamicElementProps<HeadingTag> &
  TypographyProps<HeadingSize> &
  BaseProps & { id?: string };

export default function Heading({
  as,
  size,
  mobileSize,
  className,
  children,
  id,
}: HeadingProps) {
  const TagName = as;
  return (
    <TagName
      className={classNames(className, {
        [`heading-${size}`]: !!size,
        [`heading-${mobileSize}_sm`]: !!mobileSize,
      })}
      id={id}
    >
      {children}
    </TagName>
  );
}

Heading.defaultProps = {
  // eslint-disable-next-line
  size: null,
  // eslint-disable-next-line
  mobileSize: null,
  id: null,
};
