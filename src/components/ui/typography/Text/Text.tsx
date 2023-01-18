import React from "react";
import classNames from "classnames";
import { BaseProps, DynamicElementProps, TypographyProps } from "@types";

type TextSize = "s" | "2s" | "m" | "l" | "xl" | "xs" | "xxs";

type TextTag = "p" | "span";

type TextProps = DynamicElementProps<TextTag> &
  TypographyProps<TextSize> &
  BaseProps;

export default function Text({
  as,
  size,
  mobileSize,
  className,
  children,
}: TextProps) {
  const TagName = as;
  return (
    <TagName
      className={classNames(className, {
        [`text-${size}`]: !!size,
        [`text-${mobileSize}_sm`]: !!mobileSize,
      })}
    >
      {children}
    </TagName>
  );
}

Text.defaultProps = {
  size: null,
  mobileSize: null,
};
