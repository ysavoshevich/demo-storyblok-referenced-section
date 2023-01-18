import React from "react";
import classNames from "classnames";
import { BaseProps, DynamicElementProps, TypographyProps } from "@types";

type SubtitleSize = "xs" | "s" | "m" | "l" | "xl" | "xxl";

type SubtitleTag = "p" | "span";

type SubtitleProps = DynamicElementProps<SubtitleTag> &
  TypographyProps<SubtitleSize> &
  BaseProps;

export default function Subtitle({
  as,
  size,
  mobileSize,
  className,
  children,
}: SubtitleProps) {
  const TagName = as;
  return (
    <TagName
      className={classNames(className, {
        [`subtitle-${size}`]: !!size,
        [`subtitle-${mobileSize}_sm`]: !!mobileSize,
      })}
    >
      {children}
    </TagName>
  );
}

Subtitle.defaultProps = {
  size: null,
  mobileSize: null,
};
