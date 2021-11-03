import React from "react";

interface Props {
  className?: string;
  rowItem?: any;
}

export default function TableRow({ rowItem, className }: Props) {
  return (
    <tr className={className} {...rowItem.getRowProps()}>
      {rowItem.cells.map((cell: any) => (
        <td className={className + "-row__item"} {...cell.getCellProps()}>
          {cell.render("Cell")}
        </td>
      ))}
    </tr>
  );
}
