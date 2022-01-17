import React, { ReactElement } from "react";
import SelectAtom from "react-select";

interface SelectProps {
  data: any;
  accesor: string;
  placeholder?: string;
}

export default function Select({
  data,
  accesor,
  placeholder,
}: SelectProps): ReactElement {
  const options: Array<object> = [];

  data &&
    data.forEach((item: any) => {
      options.push({ value: item[accesor], label: item[accesor] });
    });

  return <SelectAtom placeholder={placeholder} options={options} />;
}
