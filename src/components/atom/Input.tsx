import React, { ReactElement } from "react";

interface Props {
  className?: string;
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  className,
  label,
  placeholder,
  name,
  type = "text",
  disabled = false,
  required,
  onChange,
}: Props): ReactElement {
  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        name={name}
        type={type}
        required={required}
        onChange={onChange}
        disabled={disabled}
      />
      <label className="inp__label">{label}</label>
    </>
  );
}
