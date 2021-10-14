import React from "react";

interface Props {
  className?: string;
  data?: any;
  colNames?: string[];
  isHeader: boolean;
}

export default function TableRow({
  className,
  data,
  colNames,
  isHeader,
}: Props) {
  return (
    <>
      {isHeader && (
        <tr>
          {colNames &&
            colNames.map((item, index) => (
              <th key={index}>{item.toUpperCase()}</th>
            ))}
        </tr>
      )}

      {!isHeader &&
        data &&
        data.map((document: any, i: React.Key | null | undefined) => (
          <tr key={i}>
            <td>{document.name}</td>
            <td>{document.category}</td>
          </tr>
        ))}
    </>
  );
}
