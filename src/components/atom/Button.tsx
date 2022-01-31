import React, { ReactElement } from "react";

interface Props {
  className?: string;
  label: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  className,
  label,
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
      <span className="btn__label">{label}</span>
    </button>
  );
}
