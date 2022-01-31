import React, { FunctionComponent } from "react";
import { ReactSVG } from "react-svg";

export type IconAsset = FunctionComponent<React.SVGProps<SVGSVGElement>>;

interface Props {
  src: string;
  className?: string;
  ariaHidden?: boolean;
}

const Icon = ({ src, className, ariaHidden }: Props) => {
  return (
    <ReactSVG
      src={src}
      wrapper={"span"}
      className={className}
      aria-hidden={ariaHidden}
    />
  );
};

export default Icon;
