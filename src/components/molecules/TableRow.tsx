import React from "react";

interface Props {
  className?: string;
  tdClass?: string;
  rowItem?: any;
}

export default function TableRow({ rowItem, className, tdClass }: Props) {
  return (
    <tr className={className} {...rowItem.getRowProps()}>
      {rowItem.cells.map((cell: any) => (
        <td className={tdClass} {...cell.getCellProps()}>
          {cell.render("Cell")}
        </td>
      ))}
    </tr>
  );
}
