import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { CustomLinkProps } from "@types";

export default function CustomLink({
  children,
  to,
  activeClassName,
  partiallyActive,
  forceNative,
  target,
  rel,
  ...other
}: CustomLinkProps) {
  const internal = /^\/(?!\/)/.test(to);
  if (internal && !forceNative && !target && !rel) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} target={target} rel={rel} {...other}>
      {children}
    </a>
  );
}

CustomLink.defaultProps = {
  activeClassName: null,
  partiallyActive: null,
  forceNative: null,
};
