import React from "react";

interface Props {
  className?: string;
  headerGroup?: any;
}

export default function TableHeader({ className, headerGroup }: Props) {
  return (
    <tr {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map((column: any) => (
        <th className={className} {...column.getHeaderProps()}>
          {column.render("Header")}
        </th>
      ))}
    </tr>
  );
}
