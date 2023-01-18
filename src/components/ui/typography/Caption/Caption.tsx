import React from "react";
import classNames from "classnames";
import { BaseProps, DynamicElementProps, TypographyProps } from "@types";

type CaptionSize = "s";

type CaptionTag = "p" | "span";

type CaptionProps = DynamicElementProps<CaptionTag> &
  TypographyProps<CaptionSize> &
  BaseProps;

export default function Caption({
  as,
  size,
  mobileSize,
  className,
  children,
}: CaptionProps) {
  const TagName = as;
  return (
    <TagName
      className={classNames(className, {
        [`caption-${size}`]: !!size,
        [`caption-${mobileSize}_sm`]: !!mobileSize,
      })}
    >
      {children}
    </TagName>
  );
}

Caption.defaultProps = {
  size: null,
  mobileSize: null,
};
