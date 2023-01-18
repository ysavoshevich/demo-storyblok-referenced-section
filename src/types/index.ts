import { ReactNode } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface DynamicElementProps<T> {
  as: T;
}

export interface TypographyProps<T> {
  size?: T;
  mobileSize?: T;
}

export interface CustomLinkProps extends BaseProps {
  to: string;
  activeClassName?: string;
  partiallyActive?: boolean;
  forceNative?: boolean;
  [x: string]: any;
}

export interface IImage {
  alt?: string | undefined;
  childImageSharp?:
    | {
        readonly gatsbyImageData: IGatsbyImageData;
      }
    | null
    | undefined;
}

