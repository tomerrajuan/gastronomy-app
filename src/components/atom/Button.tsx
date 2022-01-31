import React, { ReactElement } from "react";
import Icon from "./Icon";

interface Props {
  className?: string;
  label?: string;
  iconSrc?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  className,
  label,
  iconSrc,
  type = "button",
  disabled = false,
  onClick,
}: Props): ReactElement {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {iconSrc && <Icon src={iconSrc} />}
      <span className="btn__label">{label}</span>
    </button>
  );
}
