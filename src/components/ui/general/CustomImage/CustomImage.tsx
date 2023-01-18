import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { IImage } from "@types";

type Props = {
  image?: IImage;
  className?: string;
  wrapperClassName?: string;
  objectFit?: React.CSSProperties["objectFit"];
  objectPosition?: React.CSSProperties["objectPosition"];
  loading?: "eager" | "lazy";
};

export default function CustomImage({
  image,
  className,
  wrapperClassName,
  loading,
  objectFit,
  objectPosition,
}: Props) {
  if (image?.childImageSharp?.gatsbyImageData) {
    return (
      <div className={wrapperClassName}>
        <GatsbyImage
          alt={image.alt || ""}
          image={image.childImageSharp.gatsbyImageData}
          className={className}
          loading={loading}
          objectFit={objectFit}
          objectPosition={objectPosition}
        />
      </div>
    );
  }
  return null;
}

CustomImage.defaultProps = {
  image: null,
  className: null,
  wrapperClassName: null,
  loading: null,
  objectFit: "cover",
  objectPosition: "50% 50%",
};
