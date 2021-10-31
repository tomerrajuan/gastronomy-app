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
        <tr className="table-header">
          {colNames &&
            colNames.map((item, index) => (
              <th className="table-header__item" key={index}>{item.toUpperCase()}</th>
            ))}
        </tr>
      )}

      {!isHeader &&
        data &&
        Object.values(data).map((obj: any, i: any) => (
          <tr key={i}>
            {Object.values(obj).map((item: any, k: any) => (
              <td key={k}>{item}</td>
            ))}
          </tr>
        ))}
    </>
  );
}

{
  /* <tr key={i}>
<td>{document.name}</td>
<td>{document.category}</td>
</tr> */
}
